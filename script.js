{/* <div id="joke" class="jokes">HaHaHa is Loading...</div>*/}  //13:51
{ /*button id="jokesbtn" class="btn">NEXT JOKE</button> */}


// PROMISES :

// GET  https://icanhazdadjoke.com/


// const jokes = document.querySelector('#joke');
// const jokesbtn = document.querySelector('#jokesbtn');

//  WE  WILL SEE THE CODE BY USING PROMISES :

// const generateJokes = () => {

//     const setHeader =  {
        
//         headers : {
//             Accept : "application/json" 
//         }

//     }

// fetch('https://icanhazdadjoke.com/', setHeader).then( (response) =>  response.json()).then( (data) =>  {jokes.innerHTML = data.joke})
// .catch((error) => { console.log(error) }) }


// jokesbtn.addEventListener('click', generateJokes);
// generateJokes(); // -->> By default, some jokes will appear when visiting 
//the page even without clicking the button.

// 
// 
// 

// NOW, WE WILL SEE THE CODE BY USING "ASYNC AWAIT" !! ==>> Async Await make the codes by promises more easier.

const jokes = document.querySelector('#joke');
const jokesbtn = document.querySelector('#jokesbtn');

// async function generateJokes() { }

//  or

const generateJokes = async () => {

    try {  // -->> error catching

    const setHeader =  {
        
        headers : {
            Accept : "application/json" 
        }
    }

const response = await fetch('https://icanhazdadjoke.com/', setHeader);
const data = await response.json();

jokes.innerHTML = data.joke

}catch(error){
    console.log(`${error}`)
}

}
jokesbtn.addEventListener('click', generateJokes);
generateJokes();