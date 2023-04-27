import ReturnButton from "@/Components/ReturnButton";
import AdminMenu from "@/Layouts/AdminMenu";
import { useForm } from "@inertiajs/react";
import  ReactQuill  from "react-quill";

export default function UpdateCategory(props)
{

   const {data, setData, post}=useForm(
        {
            description: props.category.description ? props.category.description: ''

        }
    )
        console.log(props)
    return(
        <div className="p-10">
            <AdminMenu />
            <ReturnButton />
            <form className="flex flex-col gap-4" onSubmit={(e)=>{e.preventDefault();post(route('updateCategory',props.category.id))}}>
            <h1 className="text-2xl m-10 text-center">{props.category.category}</h1>
            <b className="ml-8 text-xl">Opis</b>
            <ReactQuill className='bg-white text-black self-stretch h-[400px] mt-0 overflow-auto m-8 ' theme="snow" id="full_text" value={data.description}  onChange={(e)=>setData('description', e)}/>
            <button className="border border-sel p-2 rounded self-end mx-10">Aktualizuj</button>
            </form>
        </div>
    )

}