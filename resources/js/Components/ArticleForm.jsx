
import { categories } from '@/Data/categories';
import ReactQuill from 'react-quill';

export default function ArticleForm(props)
{
    const sent=props.sent;
    const setData=props.setData;
    const data=props.data;
    const buttonText=props.buttonText
    const options=categories.map(
        (element,index)=><option key={index} value={element.name}>{element.name}</option>
    )

   
    return(
        <form onSubmit={(e)=>{e.preventDefault();sent()}} className='flex flex-col gap-6 items-start p-6  '>
        <label className='self-center' htmlFor="title">Tytuł artykułu</label>
        <input className='text-black self-stretch m-8  mt-0' required id='title' value={data.title} onChange={(e)=>setData('title', e.target.value)} />
        <label className='' htmlFor="category">Kategoria</label>
        <select className='text-black  m-8  mt-0' required id='category' value={data.category} onChange={(e)=>setData('category', e.target.value)} >
            <option>Wybierz kategorię</option>
            {options}
        </select>
        <label htmlFor="short_text">Krótki opis artykułu</label>
        <textarea maxLength={250} className='m-8 mt-0 text-black self-stretch h-40' id='short_text' value={data.short_text} onChange={(e)=>setData('short_text', e.target.value)}/>
        <label htmlFor="full_text">Treść artykułu</label>
  <ReactQuill className='bg-white text-black self-stretch h-[400px] mt-0 overflow-auto m-8 ' theme="snow" id="full_text" value={data.full_text}  onChange={(e)=>setData('full_text', e)}/>
        <label htmlFor="file">Wybierz zdjęcie</label>
        <input className='m-8 mt-0' type="file" id='file'  onChange={(e)=>setData('file', e.target.files[0])} />
        <button className='bg-sel p-2 rounded m-4 mt-0 self-end'>{buttonText}</button>
        </form>

    )
}