// /app/lib/register.ts

import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import type { User } from '@/app/lib/definitions';

export async function registerUser(email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const user = await sql<User>`
    INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword}) RETURNING *`;
  return user;
}
