import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config(); // Load the environment variables

const sql = postgres(process.env.PGCONNECT, {}); // Use the environment variable

export default sql;
