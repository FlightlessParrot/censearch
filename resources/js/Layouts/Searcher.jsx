import { Link } from "@inertiajs/react";
// import { categories } from "@/Data/categories";



export default function Searcher(props)
{

    function submitHandler(event)
    {
        event.preventDefault();
      
    }
  
    const links=props.articleCategories.map(
        (element, index)=><Link onClick={()=>props.setLoading(true)} className="p-2 md:p-1 border-collapse text-center border border-y-sel border-x-0 hover:text-sel transition" href={route('Categories', {category: element.id})} key={index}>{element.name}</Link>
    )
    return(
        
            <form  onSubmit={submitHandler} className="gap-4 flex-col sm:flex-row w-full flex  justify-center lg:justify-end items-center p-4  sm:gap-10" >
            <div className="md:relative group  lg:-left-36 order-2">
                <button className="bg-sel group-hover:invisible md:group-hover:visible md:group-hover group-hover:bg-dark-sel p-1 px-3 rounded" onClick={(e)=>e.preventDefault()}>Kategorie</button>
                <nav className="hidden absolute md:group-hover:flex  flex-col bg-black shadow-lg z-10">
                    {links}
                </nav>
                {/* mobile */}
                
                <nav className="hidden fixed group-hover:flex justify-between z-30 flex-col md:group-hover:hidden top-0 right-0 h-screen w-1/3">
                    {links}
                </nav>
                <div className="hidden fixed group-hover:flex z-20  bg-black opacity-80 flex-col md:group-hover:hidden top-0 right-0 w-1/3 h-screen">

                </div>
                
                
            </div>
          <div className="gap-8 flex"> <input maxLength={50} type='text' placeholder='Wyszukaj' value={props.data.search} onChange={(e)=>props.setData({search: e.target.value})}  className="max-w-md flex-grow flex-shrink h-7 bg-c-gray lg:relative lg:-left-36 border focus:border-sel focus:ring-0 focus:!outline-none text-black">
            </input>
            <button className="search lg:relative lg:-left-32 hover:bg-dark-sel transition-all duration-300" ><Link onClick={()=>props.setLoading(true)} href={route('ProductsDisplayer',
            {search: props.data.search})}>Wyszukaj</Link> </button></div> 
            </form>
         
           

       
    )
}