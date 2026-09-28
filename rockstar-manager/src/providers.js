import {secret} from "./config.js";

export const providerSpec = {
  methods: ["generate"],
  providers: {
    openai: "OPENAI_API_KEY",
    claude: "ANTHROPIC_API_KEY",
    gemini: "GEMINI_API_KEY",
    grok: "GROK_API_KEY"
  }
};

export function status(env = process.env) {
  return Object.fromEntries(Object.entries(providerSpec.providers).map(([name, key]) => [
    name,
    {configured: !!env[key], secret: key, execution: name === "openai" ? "implemented" : "planned"}
  ]));
}

// First live model adapter: OpenAI Responses API. No key is logged or returned.
export async function generateText({system, user, env = process.env, fetchImpl = fetch}) {
  const apiKey = secret("OPENAI_API_KEY", env);
  const model = env.OPENAI_MODEL || "gpt-5-mini";
  const response = await fetchImpl("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      store: false,
      max_output_tokens: Number(env.AGENT_MAX_OUTPUT_TOKENS || 3000),
      input: [
        {role: "system", content: [{type: "input_text", text: system}]},
        {role: "user", content: [{type: "input_text", text: user}]}
      ]
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`MODEL_REQUEST_FAILED:${response.status}:${data.error?.message || "provider error"}`);
  const text = data.output_text || (data.output || [])
    .flatMap(item => item.content || [])
    .filter(item => item.type === "output_text")
    .map(item => item.text)
    .join("\n");
  if (!text) throw new Error("MODEL_EMPTY_RESPONSE");
  return {text, model, usage: data.usage || null};
}
