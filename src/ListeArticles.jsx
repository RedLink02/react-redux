import { useSelector } from "react-redux"

function ListeArticles(){

    const list_article = useSelector((state)=>state.articles)

    console.log(list_article)

    return(
        <>
        </>
    )
}

export default ListeArticles