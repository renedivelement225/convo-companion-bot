import { createClient } from "@supabase/supabase-js";

// Add proper keys
const supabase = createClient(
  "https://oxqlbbyfocejiooeisip.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94cWxiYnlmb2Nlamlvb2Vpc2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNjk4NjEsImV4cCI6MjA1NTc0NTg2MX0.-CprkNuOtyaoanw2WJeq82c0NKyJHjOdS3FFDP1m-WY"
);

export default class ChatBotAPI {
  async postMessage() {
    const { data, error } = await supabase
      .from("messages")
      .insert([{ message: "Hello world" }]);
  }
}
