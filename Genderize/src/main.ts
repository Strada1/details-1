const firstName :  Element | null   = document.querySelector(".input-url");
const sendRequest :  Element | null = document.querySelector(".form-input");

function postRequest(name: string){
    if(!name){
        return;
    }
    try {
        const serverUrl = new URL ('https://api.genderize.io');
        const url  = `${serverUrl}?name=${name}`;
        fetch(url)
            .then((response) => response.json())
            .then((commits) => (  alert(`${name} is ${commits.gender}`) ));
    } catch (error : any ) {
       new Error ( error.message );
    }

}

(<HTMLSelectElement>sendRequest).addEventListener("submit", (event:Event) => {
    event.preventDefault();
    postRequest((<HTMLInputElement>firstName).value) ;
} )