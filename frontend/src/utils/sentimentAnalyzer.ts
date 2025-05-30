export const analyzeSentimentAndEmotion = async (text: string) => {
  const BACKEND_URL = "http://localhost:5000/analyze";

  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch analysis");
  }

  return await response.json();
};
