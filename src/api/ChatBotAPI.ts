import { createClient } from "@supabase/supabase-js";

// Add proper keys
const supabase = createClient(
  "https://<project>.supabase.co",
  "<your-anon-key>"
);

export default class ChatBotAPI {
  async postMessage() {
    const { data, error } = await supabase
      .from("messages")
      .insert([{ message: "Hello world" }]);
  }
}
