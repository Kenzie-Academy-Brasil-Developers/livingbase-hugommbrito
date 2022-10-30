async function getPostByPage(pageNum) {
    let responseJSON = await fetch(`https://m2-api-living.herokuapp.com/news?page=${pageNum}`)
    let response = await responseJSON.json()

    return response
}


async function getPostByID(id) {
    let responseJSON = await fetch(`https://m2-api-living.herokuapp.com/news/${id}`)
    let response = await responseJSON.json()

    return response
}


export { getPostByPage, getPostByID }