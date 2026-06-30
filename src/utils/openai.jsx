import OpenAI from "openai";
import { OPENAI_Key } from "./const";

const openai = new OpenAI({
  apiKey: OPENAI_Key,
  dangerouslyAllowBrowser: true,
});

export default openai;
