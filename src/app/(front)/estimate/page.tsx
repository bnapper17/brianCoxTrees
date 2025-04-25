import ClientForm from "@/components/ClientForm";

export default function EstimatePage() {
    return (
        <div className="flex flex-col items-center justify-between xl:justify-around bg-dark-back p-6">
            <div className="p-4 bg-back shadow-lg rounded-md w-sm lg:w-xl">
                <div className="mt-4 mb-8">
                    <h2 className="text-4xl text-two font-semibold text-center mb-6">Free Estimate</h2>
                    <p className="text-3xl text-one text-center mb-12 pb-6 border-b border-gray-700">Fill out the form below and we will reach out to you!</p>
                </div>
                <ClientForm />
            </div>
        </div>
    )
}