import { db } from "@/db"
import { clients, jobs } from "@/db/schema"
import { eq, or, and, notExists, exists, asc } from "drizzle-orm"


export async function getNewClients() {
    const newClients = await db.select()
        .from(clients)
        .where(and(eq(clients.archived, false),            
            or(notExists(
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
    )
        .orderBy(clients.updatedAt)

    return newClients
    
}
