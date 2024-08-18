import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://vercel-admin-user:oWBHJzfr2UwvPqq6@cluster0.tstin.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
