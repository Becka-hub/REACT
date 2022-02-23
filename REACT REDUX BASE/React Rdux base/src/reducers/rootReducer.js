const initState = {
    posts: [{
        id:"1",
        title:"Je suis le premier article",
        body:"Voici le contenu de notre premier article!!!"
    },
    {
        id:"2",
        title:"Je suis le deuxime article",
        body:"Voici le contenu de notre premier article!!!"
    },
    {
        id:"3",
        title:"Je suis le troisieme article",
        body:"Voici le contenu de notre premier article!!!"
    },
    {
        id:"4",
        title:"Je suis le quatrieme article",
        body:"Voici le contenu de notre premier article!!!"
    },
    {
        id:"5",
        title:"Je suis le cinqueme article",
        body:"Voici le contenu de notre premier article!!!"
    }
]
}

const rootReducer = (state = initState, action) => {
    if(action.type==="DELETE_POST"){
        let newPosts=state.posts.filter((post)=>{
            return action.id!==post.id
        })
        return {
            ...state.posts,newPosts
        }
    }
    return state;
}

export default rootReducer;