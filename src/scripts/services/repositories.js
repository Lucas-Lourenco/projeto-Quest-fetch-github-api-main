import { urlBase,quantityRepos } from '/src/scripts/variables.js'

async function getrepositories(userName){
    let response = await fetch(`${urlBase}${userName}/repos?per_page= ${quantityRepos}`);

    return await response.json()
}

export {getrepositories}