export const providerSpec={methods:["plan","generate","review"],providers:{chatgpt:"OPENAI_API_KEY",claude:"ANTHROPIC_API_KEY",gemini:"GEMINI_API_KEY",grok:"GROK_API_KEY"}};
export function status(env=process.env){return Object.fromEntries(Object.entries(providerSpec.providers).map(([name,key])=>[name,{configured:!!env[key],secret:key}]))}
