import dotenv from "dotenv";
dotenv.config();

export const PORT = Number(process.env.PORT)
export const DB_NAME = process.env.DB_NAME
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = Number(process.env.DB_PORT)
if (!process.env.JWT_SECRET) {
  throw new Error("Missing JWT_SECRET environment variable");
}
export const JWT_SECRET = process.env.JWT_SECRET as string