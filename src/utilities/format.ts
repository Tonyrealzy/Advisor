import { AIFirstResponse } from "@/models/response";

export function formatResponse(rawText: string): AIFirstResponse {
  const replacements: [string, string][] = [
    ["\n", ""],
    ["```", ""],
    ["json", ""],
    ["    ", ""],
    ["  ", ""],
  ];

  for (const [oldValue, newValue] of replacements) {
    rawText = rawText.replaceAll(oldValue, newValue);
  }

  // 2️⃣ Extract JSON using regex
  const regex = /\{.*"recommendations"\s*:\s*\[.*?\]\s*\}/s;
  const match = rawText.match(regex);

  if (!match) {
    throw new Error("Could not extract JSON from response");
  }

  const jsonPart = match[0];

  // 3️⃣ Parse JSON
  let parsed: AIFirstResponse;

  try {
    parsed = JSON.parse(jsonPart);
  } catch (err: any) {
    throw new Error(`Failed to parse JSON: ${err.message}`);
  }

  // 4️⃣ Validate structure
  return parsed;
}

export function transformResponse(r: any) {
  return {
    id: r.id,
    status: r.status,
    data: r.query,
    createdAt: r.createdAt,
  }
}