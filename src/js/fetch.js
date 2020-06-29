fetch(
  "https://api.github.com/users/krysiajanik/repos?sort=created&direction=desc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, html_url } = repo;
      const repoList = document.querySelector(".repo-list--js");
      const listHTML = `<li class="repo-list__item">${name} 
      <ul> 
      <li><a href="${html_url}" title="link do repozytorium na githubie">repozytorium na githubie</a></li>`;
      if (repo.has_pages === true) {
        const ghPages = `<li><a href="https://krysiajanik.github.io/${name}/" title="link do github pages">github pages</a></li>`;
        repoList.innerHTML += listHTML.concat(ghPages, '</li>');
      }else {
        repoList.innerHTML += listHTML.concat('</li>');
      }

      
    }
  })
  .catch((error) => {
    console.log(error);
  });
