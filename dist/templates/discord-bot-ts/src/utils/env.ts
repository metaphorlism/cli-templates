import dotenv from "dotenv";
import { resolve } from "path";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  dotenv.config({ path: resolve(process.cwd(), ".env") });
} else {
  dotenv.config({ path: resolve(process.cwd(), ".env.dev") });
}

const env = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN as string,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID as string,
};

export default env;
