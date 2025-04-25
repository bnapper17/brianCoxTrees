import { db } from "@/db"
import { clients } from "@/db/schema"
import { desc } from "drizzle-orm"


export async function getClientList() {
    const clientList = await db.select()
        .from(clients)
        .orderBy(desc(clients.createdAt))

    return clientList
}
