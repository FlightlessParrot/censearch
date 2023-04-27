import MainSearchField from "@/Components/MainSearchField"
import ReturnButton from "@/Components/ReturnButton"
import Searcher from "@/Layouts/Searcher"
import { useForm, Head} from "@inertiajs/react"

export default function ProductDisplayer(props)
{
    const {data, setData}=useForm({search: ''})
   
    const jsxProducts= props.products.map(
        (product)=>{
            return(
                <div key={product.id} className="w-[200px]  flex flex-col gap-3 p-1 ">
                    <img loading='lazy' src={product.path} alt='zdjęcie produktu h-[130px]' />
                    <b className="flex-grow">{product.name}</b>
                    <a href={product.link} className="bg-dark-sel rounded text-center self-center justify-self-end p-2 hover:bg-sel" >Zobacz cenę</a>
                </div>
            )
        }
    )
    // const pagination=props.products.links.map(
    //     (element, index, array)=>{
    //         const look= element.active ? ' text-gra ' : ' text-white ';
    //         const phoneLook=index===0 || index===array.length-1 ? ' ':' display: hidden ' 
    //     return( 
    //         <Link className={'bg-dark-sel px-4 rounded text-center sm:flex items-center justify-center '+look+ phoneLook} href={element.url} dangerouslySetInnerHTML={{__html: element.label}}></Link>
    //     )
    //     }) 
        const title=props.search ? props.search+' - ceny i opinie ': ' - ceny i opinie ';
        const h1Title=props.search ? props.search+' Ranking & Opinie & Najniższe ceny': ' Ranking & Opinie & Najniższe ceny';
    return(
        <div className="">
            <Head title={title} />
            <ReturnButton />
            <Searcher data={data} setData={setData} />
            <div className="flex flex-col gap-8 my-12 p-10">
            <MainSearchField title={h1Title} data={data} setData={setData} /></div>
            <div className="relative top-0 gap-8 justify-center flex flex-wrap p-8">
                <div className="items-stretch w-4/5 absolute top-0 left-0 h-1 bg-dark-sea"></div>
                {jsxProducts}
            </div>
            {/* <div className="flex justify-center gap-4 p-2 flex-wrap items-stretch">{pagination}</div> */}
          </div>
    )





 
 
}

