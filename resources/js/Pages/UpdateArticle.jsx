import AdminMenu from "@/Layouts/AdminMenu";
import { useForm } from "@inertiajs/react";

import ArticleForm from "@/Components/ArticleForm";

import ReturnButton from "@/Components/ReturnButton";
import { DisplayChosenTopProducts, DisplayTopProducts } from "@/Components/DisplayProducts";

export default function UpdateArticle(props) {
    const { data, setData, put } = useForm({
       ...props.article
    });
   
 
    console.log(props)
    console.log(props.article)
    return (
        <div>
            <AdminMenu />
            <ReturnButton />
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl m-12 self-center">Tutaj możesz edytować artykuł</h1>
            <p className="text-xl self-center">Aktualne zdjęcie</p>
            <img className="self-center m-6 mb-10" loading="lazy" src={'/storage/'+props.article.path} />
            </div>
            <ArticleForm
                data={data}
                setData={setData}
                sent={()=>put(route("updateArticle",props.article.id))}
                buttonText='Aktualizuj artykuł'
                articleCategories={props.articleCategories}
            />
            <DisplayChosenTopProducts productsArray={props.articleTopProducts} currentArticleId={props.article.id} />
           <DisplayTopProducts productsArray={props.products} currentArticleId={props.article.id} />
        </div>
    );
}
