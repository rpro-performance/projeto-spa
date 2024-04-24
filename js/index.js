
// function route(event) {
//     event = event || window.event
//     event.preventDefault()
//     window.history.pushState({}, "", event.target.href)

//     handle()
// }

// const routes = {
//     "/home": "/index.html",
//     "/universe": "/universe.html",
//     "/Exploration": "/Exploration.html"
    
// }
// function handle() {
//     const { pathname } = window.location
//     const route = routes[pathname]
//     fetch(route)
//         .then(data => data.text())
//         .then(html => {
//             document.querySelector('#app').innerHTML = html
        
//         })
        
//     }
    
//     handle()
//     window.onpopstate = () => handle()


const links = document.querySelectorAll('a');

links.forEach((item) => item.addEventListener('click', (e) => {
  e.preventDefault();
  const href = item.getAttribute('href');
  
  fetch(href)
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
      window.history.pushState({}, '', href);
    })
    .catch(error => console.error('Houve um erro:', error));
}));