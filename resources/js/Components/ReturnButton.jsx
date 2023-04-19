import { Link } from "@inertiajs/react";

export default function ReturnButton(props)
{
    return(
<Link  href={route('Welcome')} className="bg-dark-sea hover:bg-sel transition-all duration-300 p-2 rounded md:absolute md:left-4 md:top-4"> Wróć</Link>
    )
}