import JobForm from "@/components/JobForm"
import DeleteJobForm from "@/components/DeleteJobForm"
import { getJob } from "@/lib/queries/getJob"
import { getClient } from "@/lib/queries/getClient"
import Link from "next/link"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { EllipsisVertical } from "lucide-react"


export default async function JobPage({ params }: {params: Promise<{jobId: string}>}) {

    const { jobId } = await params
    
    const job = await getJob(Number(jobId))
    const client = await getClient(job.clientId)

    return (
        <div className="flex flex-col items-center justify-between xl:justify-around bg-dark-back p-6">
            <div className="flex flex-col gap-4 p-4 bg-back shadow-lg rounded-md w-sm lg:w-xl">
            <div className="flex justify-between">
                    <Link href={`/dashboard/clients/${client.id}`} >
                        <h2 className="text-two text-3xl">{`${client.firstName} ${client.lastName}`}</h2>
                    </Link>
                    <Dialog>
                        <DialogTrigger asChild>
                            <EllipsisVertical className="text-two cursor-pointer"/>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Delete Job?</DialogTitle>
                                <DialogDescription>
                                    Type job name then click Delete button to permanently delete job, or exit and switch the archive toggle to archive job instead.
                                </DialogDescription>
                            </DialogHeader>
                            <DeleteJobForm client={client} job={job}/>
                        </DialogContent>
                    </Dialog>
                </div>
                <p className="text-xl">{client.phone}</p>
                <p className="text-xl">{client.email}</p>
                <JobForm job={job} client={client}/>
            </div>
        </div>
    )
}
