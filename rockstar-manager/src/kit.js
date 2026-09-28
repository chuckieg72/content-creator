const KIT_API_BASE = "https://api.kit.com/v4";

function requireKitKey() {
  const key = process.env.KIT_API_KEY;
  if (!key) throw new Error("KIT_API_KEY is not configured");
  return key;
}

export async function getCreatorProfile() {
  const response = await fetch(`${KIT_API_BASE}/account/creator_profile`, {
    headers: {
      Accept: "application/json",
      "X-Kit-Api-Key": requireKitKey()
    }
  });

  const body = await response.text();
  let data;
  try { data = body ? JSON.parse(body) : null; } catch { data = { raw: body }; }

  if (!response.ok) {
    const error = new Error(`Kit API request failed with HTTP ${response.status}`);
    error.status = response.status;
    error.details = data;
    throw error;
  }

  return data;
}
