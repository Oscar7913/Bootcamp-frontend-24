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
        let name = 'Oscar7913';
        const loadJsonAsync =  await loadJson(`https://api.github.com/users/${name}`);
        console.log(`Full name: ${loadJsonAsync.name}.`);
        // return user
    } catch (error) {
        if (error instanceof HttpError) {
            console.log('No such user, please reenter.'); 
            // return demoGithubUserA();
        } else {
        throw error;
        }
    }
}
demoGithubUserAsync();
