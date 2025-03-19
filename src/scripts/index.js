import { getuser } from './services/user.js';
import { user } from './objects/user.js';
import { screen } from './objects/screen.js';
import { getrepositories } from './services/repositories.js'

document.getElementById('btn-search').addEventListener('click',function(){
    const userName= document.getElementById('input-search').value
    if(validadeEmpty(userName))return
    getUserData(userName)
    
})



document.getElementById('input-search').addEventListener('keyup',function(e){
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key===13
    if(isEnterKeyPressed){
        if(validadeEmpty(userName))return
        getUserData(userName)
        
    }
})


async function getUserData(userName){
    const userResponse= await getuser(userName)
    console.log(userResponse)
    if(userResponse.message=== "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse= await getrepositories(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
    
    
}

function validadeEmpty(userName){
    if(userName.length===0){
        alert("Preencha o campo")
        return true
    }
}















