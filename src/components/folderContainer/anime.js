function animeDown() {
    const animeDowns = document.querySelectorAll('.liDropdown');

    animeDowns.forEach((li) => {
        li.addEventListener('click', () => {
            li.target.classList.toggle('liDropdown');
        })
    })
}

export default animeDown