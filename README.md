# projeto-Quest-fetch-github-api

Este projeto permite buscar usuários do GitHub e exibir suas informações, incluindo repositórios e eventos recentes, utilizando a API do GitHub.

## 📌 Funcionalidades

- Busca de usuários do GitHub.
- Exibição de informações do perfil: nome, bio, avatar, seguidores e seguindo.
- Listagem dos repositórios públicos com informações como estrelas, forks e linguagem principal.
- Exibição dos eventos recentes do usuário, incluindo commits.
- Interface responsiva e estilizada.

## 🔧 Tecnologias Utilizadas

- HTML, CSS e JavaScript.
- API do GitHub.
- Fetch API para requisições assíncronas.

## 📂 Estrutura do Projeto

```
├── src
│   ├── css
│   │   ├── reset.css
│   │   ├── styles.css
│   ├── scripts
│   │   ├── objects
│   │   │   ├── screen.js
│   │   │   ├── user.js
│   │   ├── services
│   │   │   ├── events.js
│   │   │   ├── repositories.js
│   │   ├── index.js
│   │   ├── user.js
│   │   ├── variables.js
├── index.html
├── README.md
```

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/github-user-search.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd github-user-search
   ```
3. Abra o arquivo `index.html` no navegador.

## 📜 Como Usar

1. Digite o nome do usuário do GitHub no campo de busca.
2. Pressione `Enter` ou clique no botão `Buscar`.
3. Veja as informações do usuário, repositórios e eventos recentes.

## 🎨 Estilo

O projeto utiliza a fonte "Kumbh Sans" e um layout responsivo, adaptando-se para diferentes tamanhos de tela.

## ⚠️ Observações

- A API do GitHub tem limites de requisições. Se ultrapassados, as buscas podem ser temporariamente bloqueadas.
- Alguns usuários podem não ter bio ou eventos recentes.

## 📌 Melhorias Futuras

- Paginação para exibir mais repositórios e eventos.
- Indicação visual de carregamento enquanto busca os dados.
- Exibição de mais informações dos repositórios (descrição, issues abertas etc.).

📌 **Desenvolvido por [Lucas]**


