import { useForm} from "@inertiajs/react"

export default function Login(props)
{

    const {data, setData, post, error}=useForm({
        name: '',
        password: ''
    })
   
    return(
        <div className="flex justify-center items-center text-black w-screen h-screen ">
        <form className="flex flex-col bg-white p-8 gap-2 rounded" onSubmit={(e)=>{e.preventDefault(); post(route('login'))}}>
            <strong className="text-red-600">{error}</strong> 
            <strong className="text-red-600">{props.errors.name}</strong> 
            <label htmlFor="name">Nazwa</label>
            <input required maxLength={30} type='text' id='name' value={data.name} onChange={(e)=>setData('name', e.target.value)} />
            <label htmlFor="password">Hasło</label>
            <input required maxLength={30} type='password' value={data.password} onChange={(e)=>setData('password', e.target.value)}/>
            <button className="bg-sel rounded p-2 m-4">Submit</button>
        </form>
        </div>
    )
}