import { db } from "@/db";
import { clients, jobs } from "@/db/schema"
import { asc, eq } from "drizzle-orm";

export async function getCompletedJobs() {
    const results = await db.select({
        id: jobs.id,
        requestDate: jobs.createdAt,
        title: jobs.title,
        firstName: clients.firstName,
        lastName: clients.lastName,
        businessName: clients.businessName,
        email: clients.email,
        phone: clients.phone,
        address1: clients.address1,
        city: clients.city,
        state: clients.state,
        zip: clients.zip,
    })
    .from(jobs)
    .leftJoin(clients, eq(jobs.clientId, clients.id))
    .where(eq(jobs.completed, true))
    .orderBy(asc(jobs.createdAt))
    return results
}
