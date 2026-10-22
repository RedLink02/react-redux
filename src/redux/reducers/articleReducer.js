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
            return {...state, articles:[...state.articles, action.payload]}
        case "SUPPRIMER_ARTICLE":
            return {...state, articles:state.articles.filter(article => article.id !== action.payload)}
        case "MODIFIER_ARTICLE":
            return {...state, articles:state.articles.map(article => article.id === action.payload.id ? action.payload : article)}    
        default:
            return state
    }
}
export default articleReducer