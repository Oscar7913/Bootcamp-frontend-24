class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
    try {
        const response = await fetch(url)
        if (response.status === 200){
            return response.json();
        }
        else{
            throw new HttpError(response);
        }
    } catch (error) {
        throw new HttpError(error);
    }
}

async function demoGithubUserAsync(){
    try {
        let name = prompt('Enter a name?', 'fabpot');
        const loadJsonAsync =  await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${loadJsonAsync.name}.`);
        return user
    } catch (error) {
        if (error instanceof HttpError && err.response.status == 404) {
            alert('No such user, please reenter.');
            return demoGithubUser();
          } else {
            throw err;
          }
    }
}
demoGithubUserAsync();
