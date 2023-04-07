
import Searcher from '@/Layouts/Searcher';
import Indicator from '@/Components/Indicator';

export default function WelcomePageLayout(props)
{

    return(<div className='h-screen w-screen flex flex-col overflow-clip'>
   
    <Searcher data={props.data} setData={props.setData} />
    <div className='flex items-stretch h-full w-full overflow-hidden'>
  <Indicator pageNumber={props.pageNumber} welcomeContentRef={props.welcomeContentRef}/>
    {props.children}
    </div>
    
   </div>)
}