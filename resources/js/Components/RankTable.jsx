import { CheckPrice } from "./Links"
import RankPositionImage from "./RankPositionImage"

export default function RankTable(props)
{
    const jsxElements= props.products.map(
        (element,index)=>
            <tr key={element.id} >
                <td className="w-[90px]">
                    <RankPositionImage index={index} />
                </td>
                <td className="text-center">
                    {element.name}
                </td>
                <td className="w-[150px]">
                    <CheckPrice link={element.link}>Zobacz cenę</CheckPrice>
                </td>
            </tr>
        
    );
    return(
        <table className="w-full rank-table">
            <tbody>
            {jsxElements}
            </tbody>
        </table>
    )
}