const categories = ['Todos', 'Pintura', 'Decoração', 'Organização', 'Limpeza', 'Segurança', 'Reforma', 'Aromas', 'Saúde']

function renderFilters() {
    let filterMenu = document.querySelector('#filterMenu')
    categories.forEach(category => {
        filterMenu.insertAdjacentHTML('beforeend', `
            <button class="btn-grey filter-btn" id="${category}">${category}</button>
        `)

        document.querySelector(`#${category}`).addEventListener('click', () => {
            localStorage.setItem('filter', category)
            window.location.replace('../../index.html')
        })
    })

    let filterBtns = document.querySelectorAll('.filter-btn')
    let selectedFilter = localStorage.getItem('filter')
    filterBtns.forEach(btn => {
        if (btn.id == selectedFilter){
            btn.classList.add('selected')
        }
    })
}


function scrollMenu() {
    let btnNext = document.querySelector('#next')
    let btnPrevius = document.querySelector('#previus')
    let filterMenu = document.querySelector('#filterMenu')

    btnNext.addEventListener('click', () => {
        console.log('peguei o clique')
        filterMenu.scrollLeft += 100
    })
    btnPrevius.addEventListener('click', () => {
        console.log('peguei o clique')
        filterMenu.scrollLeft -= 100
    })

}
export {renderFilters, scrollMenu}