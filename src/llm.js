import { Ai } from "@cloudflare/ai";
import { AI } from "./env";


export async function completion(sentence) {
    const ai = new Ai(AI);

    const messages = [
        { role: "system", content: "You are a friendly assistant" },
        {
            role: "user",
            content: sentence,
        },
    ];
    const response = await ai.run("@cf/meta/llama-2-7b-chat-int8", {
        messages,
    });

    return Response.json(response)["response"];
}
