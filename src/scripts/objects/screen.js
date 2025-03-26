const screen ={
    userProfile:document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML=` 
         <div class = "info">
           <div class="conjunto">
             <img src="${user.avatar}" alt="foto do perfil" />
                    <div>
                       <h1>${user.name ?? "Não possui nome cadastrado."}</h1>
                       <p>${user.bio ?? "Não possui bio cadastrada😢"}</p>
                 </div>
            </div>
                    <div class="seguidores">
                        <p>👥Seguidores <br><br> <span class="corSeguidores">${user.followers}</span></p>
                        <p>👥Seguindo <br><br> <span class="corSeguindo"> ${user.following}</span></p>
                    </div>
              </div> `

              let repositoriesItens = "";

              user.repositories.forEach(repo => {
                  repositoriesItens += `
                      <li>
                          <a href="${repo.html_url}" target="_blank">
                              ${repo.name}<br>
                              <span class="repo-box">🍴 ${repo.forks}</span>
                             <span class="repo-box">⭐ ${repo.stargazers_count}</span>
                             <span class="repo-box">👀 ${repo.watchers_count}</span>
                            <span class="repo-box">👨‍💻 ${repo.language}</span>
                          </a>
                      </li>
                  `;
              });
              
              if (user.repositories.length > 0) {
                  this.userProfile.innerHTML += `
                      <div class="repositories section">
                          <h2>Repositórios</h2>
                          <ul>${repositoriesItens}</ul>
                      </div>
                  ` 

              }

              
              let repoEventList = "";
              let repoNoCommits = "";
              
              user.events.forEach(repoEvent => {
                  if (repoEvent.type === 'PushEvent' && repoEvent.payload.commits) {
                      repoEvent.payload.commits.forEach(commit => {
                          repoEventList += `<li><b>${repoEvent.repo.name} </b>-${commit.message}</li>`;
                      });
                  } else {
                      if (repoEvent.type === 'CreateEvent'){
                      repoNoCommits += `<li><b>${repoEvent.repo.name} </b>-Sem mensagem de commit</li>`;}
                  }
              });
              
             
              
              this.userProfile.innerHTML += `
                  <div class="repositoriesEvents">
                      <h2>Eventos</h2><br>
                      <ul>${repoEventList}</ul>
                      <ul>${repoNoCommits}</ul>
                  </div>`;
            },
            
            renderNotFound(){
                   this.userProfile.innerHTML= "<h3>Usuario não encontrado</h3>"
                  }

            
}

export{screen}