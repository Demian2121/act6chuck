const but = document.getElementById('chuck_frase');
const parraf = document.querySelector('p');

but.addEventListener('click', getdata)

async function getdata() {
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await data.json();

        parraf.textContent = json.value;
    }
    catch(e){
        console.error(e);
    }
    
}