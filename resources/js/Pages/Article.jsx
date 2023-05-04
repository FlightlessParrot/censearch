import Searcher from "@/Layouts/Searcher";
import ReturnButton from "@/Components/ReturnButton";
import { useState } from "react";
import Foot from "@/Components/Foot";
import RankTable from "@/Components/RankTable";
import TopElements from "@/Components/TopElements";
import { DisplayProductsWithDescription } from "@/Components/DisplayProducts";
export default function Article(props)
{
    const [data, setData]=useState({search: 'Wyszukaj'}) 
    console.log(props)
return(


        <div className="p-2 sm:p-10"><ReturnButton />
        <Searcher data={data} setData={setData} articleCategories={props.articleCategories}/>
        
        <div className="flex flex-col items-center md:grid p-10 md:p-16 gap-8">
            <img loading='lazy' src={'/storage/'+props.article.path} className="row-span-3 max-h-[400px]"></img>
            <h1 className='row-start-2 row-end-3 text-2xl col-start-2 m-6'>{props.article.title}</h1>
            <section className="row-start-4 col-span-2 " dangerouslySetInnerHTML={{__html: props.article.full_text}}></section>

        </div>
        <h2 className="text-2xl text-center p-10 font-bold">Zobacz nasz ranking</h2>
       <RankTable products={props.products}/>

       <h2 className="mt-10 text-2xl text-center p-10 font-bold">Sprawdź inne rankingi</h2>
       <div className="flex justify-center md:justify-start  flex-wrap gap-4"><TopElements topArray={props.articles} /></div>
       <section className="my-10" dangerouslySetInnerHTML={{__html: props.article.down_page_text}}></section>
       <div className="flex flex-col gap-5 my-20"><DisplayProductsWithDescription products={props.products} /></div>
        <Foot/></div>
   
)
}