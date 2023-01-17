var posts= document.querySelector('#posts')


async function loadPosts(){
    posts.innerHTML='carregando...' 
let req = await fetch('https://jsonplaceholder.typicode.com/posts')

let json = await req.json()
montarBlog(json)



}
function montarBlog(lista){
let html = ''
    
for(let i in lista){
html += posts.innerHTML = `<div class = 'box'> <h3> ${lista[i].title} </h3> <p> ${lista[i].body}<p></div>`

}
posts.innerHTML = html


}