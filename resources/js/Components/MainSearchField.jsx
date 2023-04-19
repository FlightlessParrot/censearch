import { Link } from "@inertiajs/react"
export default function MainSearchField(props)
{

    return(
        <>
        <h1 className="text-xl md:text-4xl">{props.title}</h1>
        <form className=" flex flex-col md:flex-row items-center  gap-8">
            <input placeholder='Wyszukaj'  value={props.data.search} onChange={(e)=>props.setData({'search': e.target.value})} type='text' className="max-w-md flex-grow flex-shrink h-10 border-sel border  bg-dark-sel focus:border-white focus:ring-0  focus:!outline-none placeholder-white">
            </input>
            <button  className="search h-10 hover:bg-dark-sel transition-all duration-300"><Link href={route('ProductsDisplayer',{
            search: props.data.search,
    })}>Wyszukaj</Link></button>
            </form></>
    )
}