import { urlBase,quantityRepos } from '../variables.js'

async function getrepositories(userName){
    let response = await fetch(`${urlBase}${userName}/repos?per_page= ${quantityRepos}`);

    return await response.json()
}

export {getrepositories}