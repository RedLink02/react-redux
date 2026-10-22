export function addArticleAction(newArticle){
    return({
        type:"AJOUTER_ARTICLE",
        payload:newArticle
    })
}

export function updateArticleAction(newArticle){
    return({
        type:"MODIFER_ARTICLE",
        payload:newArticle
    })
}

export function deleteArticleAction(articleID){
    return({
        type:"SUPPRMIER_ARTICLE",
        payload:articleID
    })
}