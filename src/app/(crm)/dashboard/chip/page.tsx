import { getChipClientList } from "@/lib/queries/getChipClientList"
import ClientCard from "@/components/ClientCard"
import ClientForm from "@/components/ClientForm"

export const dynamic = 'force-dynamic'

export default async function ChipPage() {
    
    const results = await getChipClientList()
   
    return(
        <div className="flex justify-between xl:justify-around p-6 bg-dark-back">
            <div className="bg-dark-back min-h-lvh">
                {results.map((result) => (
                    
                    <ClientCard 
                    key={result.id} 
                    name={`${result.firstName} ${result.lastName}`} 
                    email={result?.email}
                    phone={result?.phone}
                    city={result.city}
                    address={`${result.address1} ${result.city} ${result.state} ${result.zip}`}
                    id = {result.id.toString()}
                    business={result.businessName}
                    updatedAt={result.updatedAt}
                    />
                    
                ))}
            </div>
            <div className="hidden md:block p-4 bg-back shadow-lg rounded-md text-two h-fit w-sm lg:w-md xl:w-xl">
                <div>
                    <h2 className="text-two text-3xl text-center font-semibold pb-2 mb-4 border-b border-gray-700">Add New Client</h2>
                </div>
                <ClientForm />
                
            </div>
        </div>
    )
}