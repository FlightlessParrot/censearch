export const topElement={
    id: 1,
    path: '/images/buty.jpg',
    title: '5 najlepszych wieheisterów',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...'
}



export const topElementsArray=createArray(topElement)

function createArray(element)
{
    const array=[]
    for(let i=1; i<21; i++)
    {
        array.push({...element,id: i })
    }

    return array;
}