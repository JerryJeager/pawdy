import "regenerator-runtime/runtime";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

const ChatPage = () => {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const sendToAI = async () => {
    if (!transcript) return;

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/tunedModels/mentalhealthtrainingdata-ljrvkjtqmb2s:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: transcript,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);

      const textResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        response.data?.candidates?.[0]?.output ||
        "No response";
      setAiResponse(textResponse);
      speakResponse(textResponse);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      if (axios.isAxiosError(error)) {
        setAiResponse(
          `Error: ${error.response?.data?.error?.message || error.message}`
        );
      } else {
        setAiResponse("Failed to get response from AI.");
      }
    }
  };

  const speakResponse = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const handleVoice = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: false,
        language: "en-US",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-orange-100 to-red-50 p-6">
      <div className="w-full max-w-md text-center">
        <h2 className="text-lg font-medium text-gray-600">Role Playing</h2>
        <h1 className="text-2xl font-semibold text-red-700">
          Overcoming Depression
        </h1>

        <div className="mt-6 bg-red-200 p-6 rounded-full text-white text-lg font-bold">
          {listening ? "Listening..." : "Tap to Speak"}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleVoice}
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            {listening ? "Stop Recording" : "Start Speaking"}
          </button>

          {transcript && !listening && (
            <button
              onClick={sendToAI}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Get AI Response
            </button>
          )}
        </div>

        {transcript && (
          <div className="mt-4 text-lg text-gray-700">
            <strong>You:</strong> {transcript}
          </div>
        )}

        {aiResponse && (
          <div className="mt-4 text-lg text-gray-700">
            <strong>AI:</strong> {aiResponse}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
