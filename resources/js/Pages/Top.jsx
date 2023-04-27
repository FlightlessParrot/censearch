import ReturnButton from "@/Components/ReturnButton";
import TopElements from "@/Components/topElements";
import Searcher from "@/Layouts/Searcher";
import { useForm, Head } from "@inertiajs/react";
import Foot from "@/Components/Foot";
export default function Top(props)
{
    const {data, setData}= useForm({search:''})
    return(
        
        <div className="p-2">
        <Head title='Ranking produktów - Najlepsze propozycje 2023 - Rankmax.pl' /> 
        <ReturnButton />
        <Searcher data={data} setData={setData} articleCategories={props.articleCategories} />
        
        <h1 className="text-2xl m-10 md:text-4xl md:m-20 pl-5">Najlepsze rankingi produktów na Rankmax.pl</h1>
           <div className='flex flex-wrap justify-center gap-12 m-8'>
            {!props.products.length && <b className="text-2xl">Nie znaleziono artykułów</b>}
             <TopElements topArray={props.products} /></div>
        <Foot />
        </div>
    )
}