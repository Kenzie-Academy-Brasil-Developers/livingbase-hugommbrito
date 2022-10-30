import { renderFilters, scrollMenu } from "../../scripts/filter-menu.js";
import {getPostByPage} from "../../scripts/requests.js"


// FUNÇÕES PARA O MENU DE FILTRO DE CATEGORIA
renderFilters()
scrollMenu()

// FUNÇÕES PARA RENDERIZAR OS POSTS
let page = 0
async function renderPosts(pageNum) {
    let posts = await getPostByPage(pageNum)

    let postsContainer = document.querySelector('#posts')

    let selectedFilter = localStorage.getItem('filter')
    console.log(selectedFilter)
    posts.news.forEach(post => {
        if(selectedFilter == 'Todos'){
            postsContainer.insertAdjacentHTML('beforeend', `
                <div class="card flex-col gap-3">
                    <img src="${post.image}" alt="">
                    <h3 class="font-20-600">${post.title}</h3>
                    <p class="font-16-400">${post.description}</p>
                    <p class="font-16-600 color-primary openPost" id="${post.id}">Acessar conteúdo</p>
                </div>
            `)
        } else if (selectedFilter == post.category) {
            postsContainer.insertAdjacentHTML('beforeend', `
                <div class="card flex-col gap-3">
                    <img src="${post.image}" alt="">
                    <h3 class="font-20-600">${post.title}</h3>
                    <p class="font-16-400">${post.description}</p>
                    <p class="font-16-600 color-primary openPost" id="${post.id}">Acessar conteúdo</p>
                </div>
            `)
        }
    })
    goToPostPage()
    page++
}
// renderPosts(page)

// FUNÇÃO PARA OBSERVAR E RENDERIZAR NOVOS POSTS
let observedDiv = document.querySelector('#observed')
const observer = new IntersectionObserver((entries) => {
    if(entries.some((entry) => entry.isIntersecting)){
        if(page < 4){
            renderPosts(page)
        }
    }
})
observer.observe(observedDiv)

// FUNÇÃO PARA ADICIONAR ABRIR POST
async function goToPostPage() {
    let openPostBtns = document.querySelectorAll('.openPost')
    openPostBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let btnID = e.target.id
            localStorage.setItem('selectedPost', btnID)
            window.location.replace('./pages/post/index.html')
        })
    })
}
