import AdminMenu from "@/Layouts/AdminMenu";
import { Link, useForm } from "@inertiajs/react";

import ArticleForm from "@/Components/ArticleForm";
import { useEffect } from "react";

export default function UpdateArticle(props) {
    const { data, setData, put } = useForm({
        title: "",
        short_text: "",
        full_text: "",
        category: "",
        file: "",
    });
    useEffect(() => {
        if (props.article) {
            const p = props.article;
            setData({
                ...data,
                title: p.title,
                short_text: p.short_text,
                full_text: p.full_text,
                category: p.category,
            });
        }
    },[props]);
    console.log(data)
    console.log(props.article)
    return (
        <div>
            <AdminMenu />
            <Link
                href={route("TopPage")}
                className="p-2 m-2 rounded bg-dark-sel"
            >
                Wróc
            </Link>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl m-12 self-center">Tutaj możesz edytować artykuł</h1>
            <p className="text-xl self-center">Aktualne zdjęcie</p>
            <img className="self-center m-6 mb-10" loading="lazy" src={'/storage/'+props.article.path} />
            </div>
            <ArticleForm
                data={data}
                setData={setData}
                sent={()=>put(route("updateArticle"))}
                buttonText='Aktualizuj artykuł'
            />
        </div>
    );
}
