import { Link } from "@inertiajs/react"
export default function WelcomeTop(props)
{
const topData=props.topArray

const topJSX= topData.map((element,index)=>{
return <Link key={element.id} href={route('Article',element.id)}><div  className="cursor-pointer flex flex-col gap-2 p-2 w-[200px] h-[380px] overflow-clip shadow-md shadow-white hover:scale-110">
    <img src={element.path} className="h-28 w-full object-cover "/>
    <b>{element.title}</b>
    <p className="text-sm">{element.short_text}</p>

</div></Link>

})
return(
    <div className='w-full h-full flex flex-col gap-10 overflow-clip justify-center'>
        <h2 className="text-3xl">Nasze top 5</h2>
        <div className="scroller custom-scrollbar  text-base flex flex-wrap gap-10 mr-3 md:mr-[20%] lg:mr-[30%]"> {topJSX}
    </div>
    </div>
)
} 