console.log('hello asshole');

    
/* //========== GET 
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        //console.log(response.json());
        return response.json();
    })
    .then((myjson) => console.log(myjson)); 
*/



/* 
//========== POST 
let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: 'example'};

fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((response) => response.json())
    .then((myJson) => console.log('Success', myJson))
    .catch(error => console.error('Error', error)); 
*/

class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    } 

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`); 
    
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json();
    };

    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }

    getCharacter(id){
        return this.getResource(`/characters/${id}`)
    }
}

const got = new GotService();

got.getAllCharacters()
   .then(res => {
       res.forEach(item => console.log(item.name));
    });

got.getCharacter(130)
   .then(res => console.log(res));
