import TopElements from "@/Components/TopElements"

export default function WelcomeTop(props)
{
return(
    <div className='w-full h-full flex flex-col gap-10 overflow-clip justify-center'>
        <h2 className="text-3xl">Najlepsze rankingi produktów na Rankmax.pl</h2>
        <div className="scroller custom-scrollbar justify-center  text-base flex flex-wrap gap-10 mr-3 items-stretch"> 
        <TopElements topArray={props.topArray} />
    </div>
    </div>
)
} 