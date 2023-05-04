import MainSearchField from "@/Components/MainSearchField"
import ReturnButton from "@/Components/ReturnButton"
import Searcher from "@/Layouts/Searcher"
import { useForm, Head} from "@inertiajs/react"
import Foot from "@/Components/Foot"
import DisplayProducts from "@/Components/DisplayProducts"
import Spinner from "@/Components/Spinner"
import { useState } from "react"
export default function ProductDisplayer(props)
{
    const [data, setData]=useState({search: ''})

    
    const [loading, setLoading]=useState(false)
        const title=props.search ? props.search+' - ceny i opinie ': ' - ceny i opinie ';
        const h1Title=props.search ? props.search+' Ranking & Opinie & Najniższe ceny': ' Ranking & Opinie & Najniższe ceny';
    return(
  
            <div>
            {loading && <Spinner />}
                <Head title={title} />
            <ReturnButton />
            <Searcher setLoading={setLoading} data={data} setData={setData} articleCategories={props.articleCategories} />
            
            <div className="flex flex-col gap-8 my-12 p-10">
            <MainSearchField setLoading={setLoading} title={h1Title} data={data} setData={setData} /></div>
            <div className="relative top-0 gap-8 justify-center flex flex-wrap p-8">
                <div className="items-stretch w-4/5 absolute top-0 left-0 h-1 bg-dark-sea"></div>
                {!props.products.length && <b className="text-2xl m-10">Nie znaleziono produktów.</b>}
                <DisplayProducts productsArray={props.products} />
            </div>
            <section dangerouslySetInnerHTML={{__html: props.description}}>
               
            </section>
            <Foot /></div>
          
    )





 
 
}

