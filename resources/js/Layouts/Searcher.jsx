import { Link } from "@inertiajs/react";
export default function Searcher(props)
{

    function submitHandler(event)
    {
        event.preventDefault();
      
    }
  
    
    return(
        
            <form  onSubmit={submitHandler} className="w-full flex justify-center lg:justify-end items-center p-4  gap-8" >
            <input type='text' placeholder='Wyszukaj' value={props.data.search} onChange={(e)=>props.setData({search: e.target.value})}  className="max-w-md flex-grow flex-shrink h-7 bg-c-gray lg:relative lg:-left-36 border focus:border-sel focus:ring-0 focus:!outline-none text-black">
            </input>
            <button className="search lg:relative lg:-left-32 hover:bg-dark-sel transition-all duration-300" ><Link href={route('ProductsDisplayer',
            {search: props.data.search})}>Wyszukaj</Link> </button>
            </form>
       
    )
}