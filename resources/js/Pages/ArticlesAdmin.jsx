import AdminMenu from "@/Layouts/AdminMenu"
import ArticleForm from "@/Components/ArticleForm"
import { useForm } from "@inertiajs/react"
import Pager from "@/Components/Pager"
import { TopElementsEditable } from "@/Components/TopElements"
import { useEffect, useState } from "react"
import { router } from "@inertiajs/react"
import { appUrl } from "@/Data/data"

export default function ArticlesAdmin(props)
{
    
   const {data, setData, post}=useForm({
    title: '',
    short_text: '',
    full_text: '',
    down_page_text: '',
    article_category_id: '',
    file: ''
   })
   const [search, setSearch]=useState('')

   useEffect(
    ()=>{
        if(props.search)
        {
            setSearch(props.search)
        }
    },[props.search]
   )
   console.log(props)
 
    return(<div className="p-4">
        <AdminMenu />
        <strong className="text-red-500 m-8">{props.message}</strong>
        <h2 className="text-2xl">Stwórz nowy artykuł</h2>
        <ArticleForm data={data} setData={setData} articleCategories={props.articleCategories} sent={()=>post(route('addArticle'))} buttonText='Stwórz artykuł'/>
        
       
        <h2 className="text-2xl">Edytuj lub usuń artykuły</h2>
       
        <form onSubmit={(e)=>{e.preventDefault(); router.get(route('TopPage', {search: search}))}} className="m-8 flex-col flex gap-4 items-start"> 
        <label htmlFor="search" className="m-4 text-xl">Wyszukaj</label>
        <input id='search'  placeholder="Wyszukaj Artykuł" value={search} onChange={e=>setSearch(e.target.value)} className="p-2 self-stretch text-black"/>
        <button className="p-2 rounded m-2 bg-sel self-end ">Wyszukaj</button>
        </form>
    
        <div className="flex flex-wrap gap-6 p-4">
            <TopElementsEditable data={props.articles.data} />
        </div>
        
        {(props.articles.last_page> 1) && <Pager links={props.articles.links} search={search} />}
    </div>

    )
}
