"use server"

import { eq } from "drizzle-orm"
import { db } from "@/db"
import { jobs } from "@/db/schema"
import { actionClient } from "@/lib/safe-action"
import { updateSignatureSchema } from "@/zod-schemas/signature"

export const saveSignatureAction = actionClient
  .metadata({actionName: 'saveSignatureAction'})
  .schema(updateSignatureSchema)
  .action(async ({parsedInput: {id, signature} }) => {
    try{
      const result = await db
        .update(jobs)
        .set({ signature: signature })
        .where(eq(jobs.id, id))
        .returning({ updatedId: jobs.id })

      if(result.length === 0) {
        throw new Error('Job not found')
      }

      return { message: `Signature accepted for Job #${result[0].updatedId}`}
    } catch(error) {
      console.error('Error updating signature:', error)
      throw new Error('Failed to save signature')
    }
  })