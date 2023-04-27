import {  Head } from '@inertiajs/react';
import {useForm} from '@inertiajs/react'
import WelcomePageLayout from '@/Layouts/welcomePageLayout';
import {  useRef, useState } from 'react';
import WelcomeMain from '@/Sections/Welcome-Sections/WelcomeMain';
import WelcomeTop from '@/Sections/Welcome-Sections/WelcomeTop';

import WelcomeSuggestions from '@/Sections/Welcome-Sections/WelcomeSuggestions';

export default function Welcome(props) {
   
    const [pageNumber, setPageNumber]=useState(1)
    const welcomeContentRef=useRef(null)
    
    const {data, setData, post, }=useForm({search: ''})
    
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
        <WelcomePageLayout pageNumber={pageNumber} welcomeContentRef={welcomeContentRef} data={data} setData={setData} articleCategories={props.articleCategories}>
      <Head title='Wyszukaj produkty' />
      <div ref={welcomeContentRef} onScroll={scrollHandler} id='welcome-content' className='flex-grow h-full w-full overflow-scroll '>
        <WelcomeMain data={data} setData={setData} />
        <WelcomeTop topArray={props.articles} />
        <WelcomeSuggestions otherSearches={props.otherChoices} suggestions={props.categories} />
      </div>
      </WelcomePageLayout>
    );
}
