let addButton = document.getElementById('btn__add');
let table = document.getElementById('table');
let title = document.getElementById('title');
let author = document.getElementById('author');


addButton.addEventListener('click', function(e){
    e.preventDefault();
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = title.value;
    table.appendChild(paragraph);
    title.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        table.removeChild(paragraph);
    })
})




function validate() {

    let data = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        form: document.getElementById('form').value,
        titleError: document.getElementById('title__err').value,
        authorError: document.getElementById('title__err').value
    }

    localStorage.setItem("data", JSON.stringify(data));
    console.log(localStorage.getItem("data"));

    data.form.addEventListener('submit', (e) => {

        let messages = [];
        //title validation
        if (data.title.length > 1 || data.title.value == null) {
            e.preventDefault();
            messages.push('Podaj tytuł książki')
            data.titleError.innerText = messages.join(', ')
        }

        //author validation
        if (data.author.length > 3 || data.author.value == null) {
            e.preventDefault();
            messages.push('Podaj autora książki')
            data.authorError.innerText = messages.join(', ');
        }
    })
}
