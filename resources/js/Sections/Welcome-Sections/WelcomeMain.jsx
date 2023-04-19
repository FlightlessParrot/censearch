import MainSearchField from "@/Components/MainSearchField"

export default function WelcomeMain(props)
{
 return( <div className='w-full h-full flex flex-col gap-4 md:gap-12 p-10 justify-center'>
        <MainSearchField title='WYSZUKIWARKA PRODUKTÓW - OPINIE I RANKINGI' data={props.data} setData={props.setData} />
            <p className=" custom-scrollbar sm:overflow-y-hidden overflow-x-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>)
}