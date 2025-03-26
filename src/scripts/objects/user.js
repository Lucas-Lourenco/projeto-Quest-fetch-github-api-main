const user= {
    avatar:'',
    name:'',
    bio:'',
    userName:'',
    followers:'',
    following:'',
    events:[],
    repositories:[],
    setInfo(gitHubData){
       this.avatar=gitHubData.avatar_url
       this.name=gitHubData.name
       this.bio=gitHubData.bio
       this.userName=gitHubData.login 
       this.followers=gitHubData.followers
       this.following=gitHubData.following
       
    },
    setRepositories(repositories){
        this.repositories=repositories
    },
    setEvents(userEvents){
        this.events= userEvents
    }
}

export{user}