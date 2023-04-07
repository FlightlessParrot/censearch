import Searcher from "@/Layouts/Searcher";
import { Link } from "@inertiajs/react";
import { useState } from "react";
export default function Article(props)
{
    const [data, setData]=useState({search: 'Wyszukaj'}) 
return(

    <div>
        <Link href={route('Welcome')} className="bg-dark-sea hover:bg-sel transition-all duration-300 p-2 rounded md:absolute md:left-4 md:top-4"> Wróć</Link>
        <Searcher data={data} setData={setData} />
        <div className="flex flex-col sm:grid p-4 gap-4">
            <img loading='lazy' src={props.article.path} className="row-span-3 "></img>
            <h1 className='row-start-2 row-end-3 text-2xl col-start-2'>{props.article.title}</h1>
            <section className="row-start-4 col-span-2 ">{props.article.full_text}</section>

        </div>
    </div>
)
}