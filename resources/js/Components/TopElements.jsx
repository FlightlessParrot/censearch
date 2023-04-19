import { Link } from "@inertiajs/react"
import { router } from "@inertiajs/react"
export default function TopElements(props)
{
    const topData=props.topArray
// opcjonalne css
// border-white border shadow-white hover:scale-110
const topJSX= topData.map((element,index)=>{
return <div key={element.id} onClick={()=>router.get(route('Article',element.id))} className="cursor-pointer flex flex-col gap-2 p-2 w-[300px] shrink overflow-clip shadow-md  ">
    <img src={'/storage/'+element.path} className="h-28 w-full object-cover "/>
    <b>{element.title}</b>
    <p className="text-sm flex-grow">{element.short_text}</p>
<Link className="self-center bg-sel hover:bg-dark-sel p-2 m-2 transition rounded" href={route('Article',element.id)}>Czytaj więcej</Link>
</div>})
return <>{topJSX}</>
}

export function TopElementsEditable(props)
{
    const topData=props.data

    const topJSX= topData.map((element,index)=>{
    return <div key={element.id} className="cursor-pointer flex flex-col gap-2 p-2 w-[300px] shrink overflow-clip shadow-md  ">
        <img src={'/storage/'+element.path} className="h-28 w-full object-cover "/>
        <b>{element.title}</b>
        <p className="text-sm flex-grow">{element.short_text}</p>
    <button className="self-center bg-sel hover:bg-dark-sel p-2 m-2 transition rounded" onClick={()=>router.get(route('updatePage',element.id))}>Edytuj</button>
    <button className="self-center bg-red-500 hover:bg-dark-sel p-2 m-2 transition rounded" onClick={()=>router.delete(route('removeArticle',element.id))}>Usuń</button>
    </div>})
    return <>{topJSX}</>

}