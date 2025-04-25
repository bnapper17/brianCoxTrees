import { db } from "@/db"
import { clients, jobs } from "@/db/schema"
import { eq, or, and, notExists, exists } from "drizzle-orm"


export async function getNewClients() {
    const newClients = await db.select()
        .from(clients)
        .where(or(notExists(
            db.select()
                .from(jobs)
                .where(eq(jobs.clientId, clients.id))
            ), exists(
                db.select()
                    .from(jobs)
                    .where(and(eq(jobs.clientId, clients.id),
                        eq(jobs.bidCompleted, false)))
            )
        ))
        .orderBy(clients.createdAt)

    return newClients
    
}
