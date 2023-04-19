import { Link } from "@inertiajs/react";
export default function Pager(props) {
    const pagination = props.links.map((element, index, array) => {
        const look = element.active ? " text-gra " : " text-white ";
        const phoneLook =
            index === 0 || index === array.length - 1
                ? " "
                : " display: hidden ";

        const search= props.search? "&search=" + props.search : '';
        if(element.url===null){return null; } 
        return (
            <Link key={index}
                className={
                    "bg-dark-sel px-4 rounded text-center sm:flex items-center justify-center " +
                    look +
                    phoneLook
                }
                href={element.url + search}
                dangerouslySetInnerHTML={{ __html: element.label }}
            ></Link>
        );
    });
    return (
        <div className="flex justify-center gap-4 p-2 flex-wrap items-stretch">
            {pagination}
        </div>
    );
}
