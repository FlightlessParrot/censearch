import { Link } from "@inertiajs/react"


export default function AdminMenu()
{
    return(<nav className="mb-4 px-4 text-sel flex items-center justify-end gap-4 font-bold">
        <Link href={route('CategoriesPage')}>Wyszukiwane frazy</Link>
        <Link href={route('TopPage')}>Artykuły Top 5</Link>
        <Link href={route('ChangePasswordPage')}>Zmień hasło</Link>
        <Link className='bg-sel p-2 m-2 rounded text-white' href='/logout'>Wyloguj</Link>
    </nav>)
}