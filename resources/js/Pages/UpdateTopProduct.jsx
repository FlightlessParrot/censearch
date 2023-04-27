import ReturnButton from "@/Components/ReturnButton";
import AdminMenu from "@/Layouts/AdminMenu";
import { useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";

export default function UpdateTopProduct(props)
{
    const {data, setData, put}=useForm({
        description: props.product.description
    })
 
    return(<>
        <AdminMenu />
        <ReturnButton />
        <form  className="p-4" onSubmit={(e)=>{e.preventDefault();put(route('updateTopProduct',{article: props.article.id, product: props.product.topProductId}))}}>
         <img className="inline-block    m-10 h-[200px] object-cover" src={props.product.path}/>
         <h1 className="inline-block m-6 text-center">{props.product.name}</h1>
       
        <ReactQuill className='bg-white text-black self-stretch h-[400px] mt-0 overflow-auto m-8 ' theme="snow" id="full_text" value={data.description}  onChange={(e)=>setData('description', e)}/>
        <button className="float-right inline-block self-end border rounded border-sel p-2 m-4">Aktualizuj</button>
        </form>
    </>
    )
}