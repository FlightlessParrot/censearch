

export default function Indicator(props)
{
   const welcomeContentView= props.welcomeContentRef?.current ? props.welcomeContentRef.current.clientHeight : 0; 
    function buttonColor(buttonNumber, activeButtonNumber)
    {
        if(buttonNumber===activeButtonNumber)
        {
            return 'bg-white'
        }
        else{
            return 'bg-dark-sel'
        }
    }
    return(
      
            <div className="w-20 relative flex items-stretch justify-center  pb-10 pt-10 left-0 top-0"> 
                <div className=" w-[2px] bg-dark-sel " />
                <button className={"indicator  top-10 "+buttonColor(1,props.pageNumber)} onClick={()=>props.welcomeContentRef.current.scroll({top: 0,behavior:'smooth'})}/>
                <button className={" indicator top-1/2 z-10 "+buttonColor(2,props.pageNumber)} onClick={()=>props.welcomeContentRef.current.scroll({top: welcomeContentView+1, behavior: 'smooth'})}/>
                <button className={" indicator  bottom-10 "+buttonColor(3,props.pageNumber)} onClick={()=>props.welcomeContentRef.current.scroll({top: 2*welcomeContentView,behavior:'smooth'})}/>
            </div>
        
    )
}