import { Link, router } from "@inertiajs/react";
import { useState } from "react";

import RankPositionImage from "./RankPositionImage";
import { CheckPrice } from "./Links";
export default function DisplayProducts({ productsArray }) {
    const jsxProducts = productsArray.map((product, index) => {
        
        return (
            <div
                key={product.id}
                className="w-[200px]  flex flex-col gap-3 p-1 overflow-hidden   "
            >
                <img
                    loading="lazy"
                    src={product.path}
                    alt="zdjęcie produktu"
                    className="object-fit"
                />

                <b className="flex-grow">
                    {" "}
                    <RankPositionImage index={index} />{product.name}
                </b>
                    <CheckPrice link={product.link}>
                         Zobacz cenę
                    </CheckPrice>
            
            </div>
        );
    });
    return jsxProducts;
}

export function DisplayTopProducts({ productsArray, currentArticleId }) {

    const [search, setSearch]=useState('')

    const jsxProducts = productsArray.map((product, index) => {
        return (
            <div
                key={product.id}
                className="w-[200px]  flex flex-col gap-3 p-1 overflow-hidden   "
            >
                <img
                    loading="lazy"
                    src={product.path}
                    alt="zdjęcie produktu"
                    className="object-fit"
                />

                <b className="flex-grow">
                     {product.name}
                </b>

                <button
                   
                    onClick={(e)=>clickHandler(e,product)}
                    className="bg-dark-sel rounded text-center self-center justify-self-end p-2 hover:bg-sel"
                >
                    Dodaj do rankingu
                </button>
            </div>
        );
    });
    function clickHandler(e, product) {
        e.preventDefault();
        router.post(route('addTopProduct',{article: currentArticleId, product_id: product.id, product_origin: 'nokaut'}))
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    router.get(route('updatePage', {article: currentArticleId, search: search}))
                }}
                className="m-10"
            >
                <label htmlFor="search" className="m-4 text-xl">
                    Wyszukaj produkty
                </label>
                <input
                    id="search"
                    placeholder="Wyszukaj produkty"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 self-stretch text-black"
                />
                <button className="p-2 rounded m-2 bg-sel self-end ">
                    Wyszukaj
                </button>
            </form>
            <div className=" flex flex-wrap gap-10 p-10">{jsxProducts}</div>
        </>
    );
}



export function DisplayChosenTopProducts({ productsArray, currentArticleId }) {
    const jsxProducts = productsArray.map((product, index) => {
        return (
            <div
                key={product.id}
                className="w-[200px]  flex flex-col gap-3 p-1 overflow-hidden  border border-green-500"
            >
                <img
                    loading="lazy"
                    src={product.path}
                    alt="zdjęcie produktu"
                    className="object-fit"
                />

                <b className="flex-grow">
                    {product.name}
                </b>
                <Link
                    href={route('UpdateTopProductPage', {article: currentArticleId, product: product.topProductId})}
                    className="bg-sel rounded text-center self-center justify-self-end p-2 hover:bg-sel"
                >
                   Edytuj opis
                </Link>
                <button
                    onClick={(e)=>clickHandler(e,product)}
                    className="bg-red-500 rounded text-center self-center justify-self-end p-2 hover:bg-sel"
                >
                   Usuń z rankingu
                </button>
            </div>
         
         
        );
    });
    function clickHandler(e, product) {
        e.preventDefault();
        router.delete(route('deleteTopProduct',{article: currentArticleId, product: product.topProductId}))
    }

    return (
        <>
            <b className="text-xl text-center block m-4">Wybrane top produkty</b>
            <div className="flex flex-wrap gap-8 p-10">{jsxProducts}</div>
        </>
    );
}


export function DisplayProductsWithDescription(props)
{
    
    const jsxProducts = props.products.map((product, index) => {
        return (
            <div
                key={product.id}
                className="m-10"
            >
              <div className="m-4">
                    <RankPositionImage index={index} />
                   <b className="m-2">   {product.name}
                </b></div>
                <img
                    loading="lazy"
                    src={product.path}
                    alt="zdjęcie produktu"
                    className="object-fit float-left m-4"
                />
                <section className='m-6' dangerouslySetInnerHTML={{__html: product.description}}>

                </section>
                <div className="p-4 relative left-10">
                <CheckPrice  link={product.link}>
                    Zobacz cenę
                </CheckPrice></div>
            </div>
         
         
        );
    });
  return jsxProducts;
}