fetch('https://api.github.com/users/krysiajanik/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, html_url} = repo;
        const repoList = document.querySelector('.repo-list--js');
        const listHTML = `<li><a href="${html_url}" title="link do repozytorium na githubie">${name}<li>`;
        repoList.innerHTML += listHTML;
    }
})
.catch(error => {
    console.log(error);
    
})