// const button = document.getElementById('quote-button');
// console.log(button);

//  button.addEventListener('click',async (event) => {
//     event.preventDefault();
//     return fetch('https://api.kanye.rest')
//       .then(res => res.json())
//       .then(json => button = json[0])
//       .catch(err => console.log(err))
//  }

const p1 = document.querySelector('p');
   const getQuote = () => {
      return fetch('https://api.kanye.rest')
       .then(res => res.json())
       .then(json => p1.innerHTML=json.quote)
       .catch(err => console.log(err))
 }

