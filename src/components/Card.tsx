
import Link from "next/link"
type Props = {
    title: string,
    description: string,
    url:string,
    className?: string
}
export default function Card({ title, description, url, className}: Props) {

    return(
            <Link href={url} >
                <div className={`flex flex-col gap-2 w-xs md:w-md xl:w-xl p-4 mb-6 bg-back shadow-lg rounded-md cursor-pointer ${className}`}>
                    <h2 className="text-2xl md:text-3xl text-two">{title}</h2>
                    <p className="text-xl text-end text-one">{description}</p>
                </div>
            </Link>
    )
}