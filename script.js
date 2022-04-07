window.addEventListener('load', () => {
    const formSearch = document.getElementById('form');
    const inputSearch = document.getElementById('input');
    const listSearch = document.getElementById('todos');
    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputValue = inputSearch.value;
        if(inputValue) {
            const liValue = document.createElement('li');
            liValue.innerText = inputValue;
            listSearch.appendChild(liValue);
            inputSearch.value = ''
            liValue.addEventListener('click', () => {
                liValue.classList.toggle('completed');
            });
            liValue.addEventListener('dblclick', () => {
                liValue.remove()
            })
        }
    })
})