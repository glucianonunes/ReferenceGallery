let count = 0;

function AddProject(){
    count += 1;
    let gallery = document.getElementById('gallery');
    let galleryAdd = document.getElementsByClassName('gallery__addproject')[0];
    let newElement = document.createElement('div');
    let newContent =  document.createTextNode("Projeto " + count);
    newElement.className = 'project__element';

    newElement.setAttribute('contenteditable', 'true');

    newElement.appendChild(newContent);

    gallery.insertBefore(newElement, galleryAdd);

    let newPencil = document.createElement('img')
    newPencil.setAttribute("src", "assets/img/pencil-svgrepo-com.svg");
    newPencil.className = count.toString();
    newPencil.setAttribute('onclick', 'editElement(this)');
    newElement.appendChild(newPencil);

    let newTrash = document.createElement('img');
    newTrash.setAttribute("src", "assets/img/trash-svgrepo-com.svg");
    newTrash.className = "trash";
    newTrash.setAttribute('onclick', 'deleteElement(this)');
    newElement.appendChild(newTrash);
    

}

function editElement(element){

    referencesTitle = document.getElementById('section__references-title').innerText = 'Referências do projeto ' + element.parentNode.innerText;
}

function deleteElement(element){
    element.parentNode.remove();
    count -= 1;
}

