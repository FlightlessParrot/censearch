import AdminMenu from "@/Layouts/AdminMenu";
import { useForm } from "@inertiajs/react"
import { useEffect, useState } from "react";

export default function ChangePassword(props)
{
    const {data, setData, put}=useForm(
        {
            old_password:'',
            password: '',
            confirmation: ''
        }
    )
    const [error, setErrorMessage]=useState({
        lengthMessage: '',
        confirmMessage: ''
    })

    useEffect(
        ()=>{
            if(data.password!=='')
            {
                console.log( data.confirmation===data.password)
            data.confirmation!==data.password ? 
            setErrorMessage(s=>({...s,confirmMessage:'Hasła nie są identyczne.'})): 
            setErrorMessage(s=>({...s,confirmMessage:''}));
            data.password.length<9 && setErrorMessage(s=>({...s,lengthMessage:'Nowe hasło jest za krótkie.'})) 
            data.password.length>8 && setErrorMessage(s=>({...s,lengthMessage:''}))
            }
        },[data]
    )
    function showErrors(errorObject)
    {
        const errors=Object.values(errorObject)
        console.log(errors)
        const jsxArray=errors.map((error, i)=>{
           return <p key={i}>{error}</p>
        });
        return jsxArray;
    }
    function submitHandler(event)
    {
        event.preventDefault();
        if(data.confirmation===data.password && data.password.length>8)
        {
            put(route('changePassword'))
        }
    }
    console.log(props)
    return(<div>
        <AdminMenu />
        <div className="flex flex-col justify-center items-center"> 
        
        <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <h1 className="text-2xl mb-0 m-12 text-center">Zmień hasło</h1>
        <strong className="text-red-500 h-20">{props.errors?.message && <p>{props.errors.message}</p>}
        {showErrors(error)}</strong>
        <label htmlFor="oldPassword">Podaj aktualne hasło:</label>
        <input id="oldPassword" maxLength={30} value={data.old_password} onChange={(e)=>setData('old_password',e.target.value)} required type='password'  className="text-black" />
        <label htmlFor="password">Podaj nowe hasło:</label>
        <input id='password' maxLength={30} value={data.password} onChange={(e)=>setData('password',e.target.value)} required type='password' className="text-black" />
        <label htmlFor="confirm">Powtórz nowe hasło:</label>
        <input id='confirm' maxLength={30} value={data.confirmation} onChange={(e)=>setData('confirmation',e.target.value)} required type='password' className="text-black" />
        <button className="bg-sel p-2 m-2 self-end">Zmień hasło</button>
        </form>
        
        </div></div>
    )
}