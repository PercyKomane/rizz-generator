export const generateRizz = async (context: string) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/gpt2",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer YOUR_HF_API_KEY",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: `Generate a flirty pickup line for: ${context}` }),
      }
    );
    const result = await response.json();
    return result[0]?.generated_text || "Failed to generate rizz.";
  };