const user= {
    avatar:'',
    name:'',
    bio:'',
    userName:'',
    repositories:[],
    setInfo(gitHubData){
       this.avatar=gitHubData.avatar_url
       this.name=gitHubData.name
       this.bio=gitHubData.bio
       this.userName=gitHubData.login 
    },
    setRepositories(repositories){
        this.repositories=repositories
    }
}

export{user}