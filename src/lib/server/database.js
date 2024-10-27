
import postgres from 'postgres'

// see env variables in .env
// import {PGCONNECT} from '$env/static/private';
import dotenv from 'dotenv';
dotenv.config();

const sql = postgres(process.env.PGCONNECT, {});

//const sql = postgres(PGCONNECT, {} )

export default sql;
