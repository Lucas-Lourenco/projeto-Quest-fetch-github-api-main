

async function getEvents(userName){
    let response = await fetch(`https://api.github.com/users/${userName}/events`);

    return await response.json()
}

export {getEvents}