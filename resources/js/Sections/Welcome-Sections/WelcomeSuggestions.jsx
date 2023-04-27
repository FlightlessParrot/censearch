import { Link } from "@inertiajs/react";
import Foot from "@/Components/Foot";
export default function WelcomeSuggestions(props) {
    const otherSearches = props.otherSearches;
    const suggestions = props.suggestions;

    const jsxOtherSearches = otherSearches.map((element, index) => {
        return (
            <Link
                key={element.id}
                className="px-6 p-4 md:px-8 rounded bg-sel"
                href={route("ProductsDisplayer", {
                    search: element.category,
                })}
            >
                {element.category}
            </Link>
        );
    });

    const jsxSuggestions = suggestions.map((element, index) => {
        return (
            <Link
                key={element.id}
                className="p-2 md:p-4 rounded bg-sel"
                href={route("ProductsDisplayer", {
                    search: element.category,
                })}
            >
                {element.category}
            </Link>
        );
    });
    return (
        <div className="w-full h-full">
            <h3 className="text-2xl m-10">Inny użytkownicy wyszukiwali też</h3>
            <div className="flex flex-wrap overflow-x-hidden custom-scrollbar gap-3 mr-10 md:gap-6 max-h-[20%] md:max-h-[30%] ">
                {jsxOtherSearches}
            </div>
            <h3 className="text-xl m-8">Może zainteresuje Cię</h3>
            <div className="flex flex-wrap scroll gap-2 max-h-[18%] md:max-h-[20%] overflow-x-hidden mr-10 custom-scrollbar ">
                {jsxSuggestions}
            </div>
            <Foot />
        </div>
    );
}
