document.addEventListener('DOMContentLoaded', function(){
    fetchCats()
    fetchHobbies()
    getCatForm().addEventListener("submit", createCat)
})


