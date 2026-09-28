export function config(env=process.env){return {fal:!!env.FAL_KEY,providers:{chatgpt:!!env.OPENAI_API_KEY,claude:!!env.ANTHROPIC_API_KEY,gemini:!!env.GEMINI_API_KEY,grok:!!env.GROK_API_KEY}}}
export function secret(name,env=process.env){if(!env[name])throw new Error("MISSING_SECRET:"+name);return env[name]}
