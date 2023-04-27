import { Link } from "@inertiajs/react";

export default function ReturnButton(props)
{
    return(
<Link  onClick={()=>window.history.back()} className="bg-dark-sea inline-block  hover:bg-sel transition-all duration-300 p-2 m-2 rounded md:absolute md:left-4 md:top-4"> Wróć</Link>
    )
}