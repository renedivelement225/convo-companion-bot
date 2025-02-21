export default class ChatBotAPI {
  constructor() {}

  async postMessage(message: string) {
    const { response, error } = await fetch("https://convo-companion-production.up.railway.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }).then((res) => res.json());

    if (error) {
      console.error("Error inserting message:", error);
      throw new Error(error.message);
    }

    return response;
  }
}
