import AdminMenu from "@/Layouts/AdminMenu";
import { useForm, Link} from "@inertiajs/react"
import { useEffect } from "react";
import Pager from "@/Components/Pager";
export default function CategoryAdmin(props)
{
    console.log(props)
    console.log(props.errors)
  
    const {data, setData, post, get}=useForm(
        {category: '',
        search: ''}
    )
        useEffect(
            ()=>{props.search && setData('search', props.search)},[props.search]
        )
    const elements=props.categories.data.map(
        (element)=>
        {return(<div key={element.id} className="border p-2">
            <span className=" p-2 m-2">{element.category}</span><Link href={route('deleteCategory',[element.id])} className="bg-red-500 p-1 m-2 rounded">remove</Link>
        </div>)}
    )
        
    
return(<div>
    <AdminMenu />
    <h1 className="text-2xl m-4 px-4">Dodaj nową frazę</h1>
    <form onSubmit={(e)=>{e.preventDefault(); post(route('addCategory',data.category))}} className="flex flex-col gap-4 items-start p-6"> 
        <label htmlFor="category">Nowa Fraza</label>
        <input className="self-stretch text-black" id="category" name='category' value={data.category} onChange={(e)=>setData('category', e.target.value)}/>
        <button className="bg-sel p-2 m-2 rounded self-end">Dodaj frazę</button>
    </form>
    <form onSubmit={(e)=>{e.preventDefault();get(route('CategoriesPage'))}} className="flex flex-col gap-4 items-start p-6">
    <label htmlFor="search" className="text-2xl">Wyszukaj</label>
        <input className="self-stretch text-black" id="search" name='search' value={data.search} onChange={(e)=>setData('search', e.target.value)}/>
        <button className="bg-sel p-2 m-2 rounded self-end">Wyszukaj</button>
    </form>
    <h1 className="text-2xl m-4 px-4">Usuń frazy</h1>
    <div className="flex flex-wrap gap-4 p-4">
        {elements}
    </div>
    {props.categories.last_page > 1 &&<Pager links={props.categories.links} search={data.search}/>}
    </div>
)
}