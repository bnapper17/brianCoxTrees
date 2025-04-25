import { getCompletedJobs } from "@/lib/queries/getCompletedJobs"
import JobCard from "@/components/JobCard"

export default async function RequestsPage() {
    const results = await getCompletedJobs()
    return(
        <div className="bg-dark-back p-6 h-lvh">
            {results.map((result) => (
                <JobCard 
                    key={result.id} 
                    name={`${result.firstName} ${result.lastName}`} 
                    title={result.title}
                    email={result?.email}
                    phone={result?.phone}
                    city={result?.city}
                    address={`${result.address1}, ${result.city}, ${result.state} ${result.zip}`}
                    id = {result.id.toString()}
                    createdAt = {result.requestDate}
                    />
            ))}
        </div>
    )
}