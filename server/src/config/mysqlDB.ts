import mysql, { Pool } from 'mysql2/promise';

let pool: Pool;

export function connect() {
  // Create the connection pool. The pool-specific settings are the defaults
  pool = mysql.createPool({
    host: '77.243.81.95',
    user: 'admin',
    password: 'TUot/Y+C//xu3cMJeOzm/0M=',
    database: 'lesson_86',
  });
}


export async function disconnect() {
  await pool.end();
}

export function getDb() {
  return pool;
}