import { Link } from "@inertiajs/react";

export default function WelcomeSuggestions(props)
{
    const otherSearches=props.otherSearches;
    const suggestions=props.suggestions;
    console.log(suggestions)
    const jsxOtherSearches=otherSearches.map(
        (element, index)=>{
            return(
                <div key={element.id} className="p-6 md:p-8 rounded bg-sel">
                  <Link href={route('ProductsDisplayer',{
            search: element.category,
    })}>{element.category}</Link> 
                </div>
            )
        })

    const jsxSuggestions=suggestions.map(
        (element, index)=>{
        return(
            <div key={element.id} className="p-2 md:p-4 rounded bg-sel">
                <Link href={route('ProductsDisplayer',{
            search: element.category,
    })}>{element.category}</Link> 
            </div>
        )}
    )
    return(
        <div className='w-full h-full'>
            <h3 className="text-2xl m-10">Inny użytkownicy wyszukiwali też</h3>
            <div className="flex flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar gap-3 md:gap-6 max-h-40 md:max-h-80 max-w-4xl md:mr-32">{jsxOtherSearches}</div>
            <h3 className="text-xl m-8">Może zainteresuje Cię</h3>
            <div className="flex flex-wrap scroll gap-2 max-h-40 max-w-2xl  overflow-x-hidden custom-scrollbar  md:mr-40">{jsxSuggestions}</div>
        </div>
    )
}