import {  Head } from '@inertiajs/react';
import {useForm} from '@inertiajs/react'
import WelcomePageLayout from '@/Layouts/welcomePageLayout';
import {  useRef, useState } from 'react';
import WelcomeMain from '@/Sections/Welcome-Sections/WelcomeMain';
import WelcomeTop from '@/Sections/Welcome-Sections/WelcomeTop';

import WelcomeSuggestions from '@/Sections/Welcome-Sections/WelcomeSuggestions';
import Spinner from '@/Components/Spinner';

export default function Welcome(props) {
   
    const [pageNumber, setPageNumber]=useState(1)
    const welcomeContentRef=useRef(null)
    const [loading, setLoading]=useState(false)
    const [data, setData ]=useState({search: ''})
    
    function scrollHandler(event)
    {
  
        const element=event.target;
        if(!element.scrollTop)
               {setPageNumber(1)}
               else{
                if(Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1)
                {
                    setPageNumber(3)
                }
                else {
                    setPageNumber(2)
                }
               }
    }

 
    return (
        <WelcomePageLayout setLoading={setLoading} pageNumber={pageNumber} welcomeContentRef={welcomeContentRef} data={data} setData={setData} articleCategories={props.articleCategories}>
          {loading &&  <Spinner />}
         
      <Head title='Wyszukaj produkty' />
      <div ref={welcomeContentRef} onScroll={scrollHandler} id='welcome-content' className='flex-grow h-full w-full overflow-scroll '>
        <WelcomeMain data={data} setData={setData} setLoading={setLoading}/>
        <WelcomeTop topArray={props.articles} />
        <WelcomeSuggestions otherSearches={props.otherChoices} suggestions={props.categories} />
      </div>
      </WelcomePageLayout>
    );
}
