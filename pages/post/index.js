import { renderFilters, scrollMenu } from "../../scripts/filter-menu.js";
import { getPostByID } from "../../scripts/requests.js";

renderFilters()
scrollMenu()

let renderSelectedPost = async () => {
    let postID = localStorage.getItem('selectedPost')
    let post = await getPostByID(postID)

    let main = document.querySelector('main')

    main.insertAdjacentHTML('afterbegin', `
    <section class="bgc-grey-7" id="titleSection">
            <div class="titleArea container flex-col gap-1">
                <h1 class="font-40-600">${post.title}</h1>
                <p class="font-15-400">${post.description}</p>
            </div>
        </section>
        <section class="container mt-1">
            <img src="${post.image}" alt="">
            <p class="font-14-600">${post.content}</p>

        </section>
    `)
}
renderSelectedPost()