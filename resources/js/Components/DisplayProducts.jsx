import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
export default function DisplayProducts({ productsArray }) {
    const jsxProducts = productsArray.map((product, index) => {
        let image;
        switch (index) {
            case 0:
                image = (
                    <img
                        className="w-8 inline-block"
                        src="storage/images/002-best.svg"
                    />
                );
                break;
            case 1:
                image = (
                    <img
                        className="w-8 inline-block"
                        src="storage/images/003-second.svg"
                    />
                );
                break;
            case 2:
                image = (
                    <img
                        className="w-8 inline-block"
                        src="storage/images/004-third.svg"
                    />
                );
                break;
        }
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
                    {image} {product.name}
                </b>

                <a
                    rel="nofollow"
                    href={product.link}
                    className="bg-dark-sel rounded text-center self-center justify-self-end p-2 hover:bg-sel"
                >
                    Zobacz cenę
                </a>
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