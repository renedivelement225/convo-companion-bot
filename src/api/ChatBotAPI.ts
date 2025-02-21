import { createClient } from "@supabase/supabase-js";

export default class ChatBotAPI {
  #supabase; // Private class field

  constructor() {
    this.#supabase = createClient(
      "https://<project>.supabase.co",
      "<your-anon-key>"
    );
  }

  async postMessage() {
    const { data, error } = await this.#supabase
      .from("messages")
      .insert([{ message: "Hello world" }]);
  }
}
