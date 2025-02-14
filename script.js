// landing page

window.addEventListener('keydown' , e=> {
    if (e.key == 'Enter') {
        e.preventDefault()
    }
})

// 1 header
let goldPrice = document.querySelector('#gold-price')

// 2 search bar
let searchInput = document.querySelector('#search-input')
let searchBtn = document.querySelector('#search-btn')
let searchLink = document.querySelector('#search-it')

searchLink.addEventListener('click' , e=> {
    searchLink.href = `productlist.html?search=${searchInput.value}`
    searchInput.value = ''
})

// 3 banner section
let nextBtn = document.querySelector('#banner-next')
let previousBtn = document.querySelector('#banner-previous')
let images = [...document.querySelector('#banner-sec').children]

let bannerIndex = 0
function changeBanner (index) {
    images.forEach(image =>
        image.classList.remove('active')
    )
    images[index].classList.add('active')
}

let slider = window.setInterval(()=>{
    bannerIndex++
    if (bannerIndex==images.length){
        bannerIndex = 0
    }
    changeBanner(bannerIndex)
},6000)

nextBtn.addEventListener('click' , () =>{
    bannerIndex++
    if (bannerIndex==images.length){
        bannerIndex = 0
    }
    changeBanner(bannerIndex)
})
previousBtn.addEventListener('click' , () =>{
    bannerIndex--
    if (bannerIndex<0){
        bannerIndex = images.length-1
    }
    changeBanner(bannerIndex)
})


// category section

let moreCategoryBtn = document.querySelector('#more-category-btn')
let moreCards = document.querySelectorAll(".more-category")
let categorySection = document.querySelector('#categories')
let moreCategoryIcon = document.querySelector('#more-category-icon')
let lessCategoryIcon = document.querySelector('#less-category-icon')

moreCategoryBtn.addEventListener('click' , () => {
    if (moreCategoryBtn.classList.contains('active-more-cat')) {
       showMoreCategories('less')
    } else {
        showMoreCategories('more')
    }
})

function showMoreCategories (state) {
    if (state == "more") {
        moreCards.forEach(card => {
        card.style.display = 'flex'
        })
        moreCategoryBtn.classList.toggle('active-more-cat')
        window.scrollTo(0,categorySection.offsetTop)
        lessCategoryIcon.style.display = 'none'
        moreCategoryIcon.style.display = 'unset'
    } else {
        moreCards.forEach(card => {
        card.style.display = 'none'
        })
        moreCategoryBtn.classList.toggle('active-more-cat')
        window.scrollTo(0,categorySection.offsetTop)
        moreCategoryIcon.style.display = 'none'
        lessCategoryIcon.style.display = 'unset'


    }
}
categorySection.addEventListener('click' , e =>{
    if (e.currentTarget.tagName = 'img')
        console.log('hello')
})
