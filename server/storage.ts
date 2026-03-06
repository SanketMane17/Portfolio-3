import { db } from "./db";
import { messages, type InsertMessage, type MessageResponse } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getMessages(): Promise<MessageResponse[]>;
  createMessage(message: InsertMessage): Promise<MessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async getMessages(): Promise<MessageResponse[]> {
    return await db.select().from(messages);
  }

  async createMessage(insertMessage: InsertMessage): Promise<MessageResponse> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
