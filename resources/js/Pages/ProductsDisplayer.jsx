import MainSearchField from "@/Components/MainSearchField"
import Searcher from "@/Layouts/Searcher"
import { Link, useForm } from "@inertiajs/react"

export default function ProductDisplayer(props)
{
    const {data, setData}=useForm({search: ''})
    console.log(props.products)
    const jsxProducts= props.products.data.map(
        (product)=>{
            return(
                <div key={product.id} className="w-[180px] h-[300px] flex flex-col gap-3 p-1 overflow-auto">
                    <img loading='lazy' src={product.path} alt='zdjęcie produktu' />
                    <b>{product.name}</b>
                    <a href={product.link} className="bg-dark-sel rounded text-center self-center p-2 hover:bg-sel" >Zobacz cenę</a>
                </div>
            )

        }
    )
    const pagination=props.products.links.map(
        (element, index, array)=>{
            const look= element.active ? ' text-gra ' : ' text-white ';
            const phoneLook=index===0 || index===array.length-1 ? ' ':' display: hidden ' 
        return( 
            <Link className={'bg-dark-sel px-4 rounded text-center sm:flex items-center justify-center '+look+ phoneLook} href={element.url} dangerouslySetInnerHTML={{__html: element.label}}></Link>
        )
        }) 
    return(
        <div className="">
            <Link  href={route('Welcome')} className="bg-dark-sea hover:bg-sel transition-all duration-300 p-2 rounded md:absolute md:left-4 md:top-4"> Wróć</Link>
            <Searcher data={data} setData={setData} />
            <div className="flex flex-col gap-8 my-12 p-10">
            <MainSearchField title='Tytuł podstrony' data={data} setData={setData} /></div>
            <div className="relative top-0 gap-4 flex flex-wrap p-8">
                <div className="w-4/5 absolute top-0 left-0 h-1 bg-dark-sea"></div>
                {jsxProducts}
            </div>
            <div className="flex justify-center gap-4 p-2 flex-wrap">{pagination}</div>

        </div>
    )
}