import TopElements from "@/Components/topElements";
import Searcher from "@/Layouts/Searcher";
import { useForm, Head } from "@inertiajs/react";

export default function Top(props)
{
    const {data, setData}= useForm({search:''})
    return(
        
        <div className="p-2">
        <Head title='Ranking produktów - Najlepsze propozycje 2023 - Rankmax.pl' /> 
        <Searcher data={data} setData={setData} />
     
        <h1 className="text-2xl m-10 md:text-4xl md:m-20 pl-5">Najlepsze rankingi produktów na Rankmax.pl</h1>
           <div className='flex flex-wrap justify-center gap-12 m-8'> <TopElements topArray={props.products} /></div>
        </div>
    )
}