const initialState =
{
    user:{id:1, username:"amine"},
    articles:[
    {id:1, designation:"mouse", famille:"CONSOMMABLE"},
    {id:2, designation:"keyboard", famille:"CONSOMMABLE"}
    ],
    categories:[],
    fornisseurs:[]
}

function articleReducer(state=initialState, action){
    switch(action.type){
        case "AJOUTER_ARTICLE":
            return {...state, article:[...state.article, action.payload]}
        case "SUPPRMIER_ARTICLE":
            return {...state, article:state.article.filter(article => article.id !== action.payload)}
        case "MODIFIER_ARTICLE":
            return {...state, article:state.article.map(article => article.id === action.payload.id ? action.payload : article)}    
        default:
            return state
    }
}
export default articleReducer