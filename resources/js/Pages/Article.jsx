import Searcher from "@/Layouts/Searcher";
import ReturnButton from "@/Components/ReturnButton";
import { useState } from "react";
import Foot from "@/Components/Foot";
export default function Article(props)
{
    const [data, setData]=useState({search: 'Wyszukaj'}) 
return(


        <div><ReturnButton />
        <Searcher data={data} setData={setData} articleCategories={props.articleCategories}/>
        
        <div className="flex flex-col items-center md:grid p-10 md:p-16 gap-8">
            <img loading='lazy' src={'/storage/'+props.article.path} className="row-span-3 max-h-[400px]"></img>
            <h1 className='row-start-2 row-end-3 text-2xl col-start-2 m-6'>{props.article.title}</h1>
            <section className="row-start-4 col-span-2 ">{props.article.full_text}</section>

        </div>
        <Foot/></div>
   
)
}