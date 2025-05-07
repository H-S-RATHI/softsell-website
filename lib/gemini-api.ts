// Gemini API integration

/**
 * Sends a message to the Gemini API and returns the response
 * @param message The user's message
 * @param apiKey The Gemini API key
 * @returns The AI response text
 */
export async function getGeminiResponse(message: string, apiKey: string): Promise<string> {
  try {
    // Using the correct API endpoint format for Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a helpful assistant for SoftSell, a company that helps businesses sell their unused software licenses. 
                  Answer the following question in a friendly, professional manner. 
                  Keep responses concise and focused on helping users understand how to sell their software licenses.
                  Question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      let errorMessage = `API error: ${response.status}`;
      try {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        if (errorData.error && errorData.error.message) {
          errorMessage = `API error: ${errorData.error.message}`;
        }
      } catch (e) {
        console.error('Error parsing error response:', e);
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    // Extract the response text from the Gemini API response
    console.log('Gemini API response:', JSON.stringify(data, null, 2));
    
    if (
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0] &&
      data.candidates[0].content.parts[0].text
    ) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.error('Unexpected API response format:', data);
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}