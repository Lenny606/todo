//remove elements via bubbling
//TODO refactor
let itemsListUL = document.querySelector('#items-list ul');
itemsListUL.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
//forms can be accessed on document, returns HTML collection
document.forms
//first + second form
document.forms[0];
document.forms['add-item'];

//HIDE ITEMs -----------------------------
let checkbox = document.getElementById('hide');
let itemsList = document.getElementById('items-list');
checkbox.addEventListener('change', hideItems);

function hideItems(e) {
    checkbox.checked ?
        itemsList.style.display = 'none' :
        itemsList.style.display = 'block';
}

//SEARCH ITEMS with indexOF method
const form = document.forms[0]; //first form in document
const input = form.querySelector('input'); //input inside form
input.addEventListener('keyup', (e) => {
    let itemsList = document.querySelectorAll('.item')
    itemsList.forEach((item) => {
        let searchItem = e.target.value.toLowerCase();
        let itemName = item.textContent.toLowerCase();
        if (itemName.indexOf(searchItem) === -1) {
            item.parentElement.style.display = 'none';
        } else {
            item.parentElement.style.display = 'block';
        }
    })
})


//ADD ITEM --------------------------------
let formAdd = document.forms[1];
let parentListUl = document.querySelector('#items-list ul')
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    //select input on form
    let inputText = formAdd.querySelector('input').value;

    let newItemLI = document.createElement('li')
    let itemName = document.createElement('span')
    itemName.textContent = inputText;

    let deleteBtn = document.createElement('span')
    deleteBtn.textContent = 'Delete';


    newItemLI.appendChild(itemName)
    newItemLI.appendChild(deleteBtn);

    itemName.classList.add('item');
    deleteBtn.classList.add('delete');

    parentListUl.appendChild(newItemLI);

    //clear the value
    formAdd.querySelector('input').value = null;
})

//DATA TABS
const heading = document.querySelector('.heading')
const panels = document.querySelectorAll('.panel')

let selectedPanel = null;

heading.addEventListener('click' , (e) => {
    let target = e.target
    let dataAttribute = target.dataset.clicked;


    if(target.tagName === 'LI'){
        if(selectedPanel !== null){
            selectedPanel.classList.toggle('selected')
        }
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        //select target panel
        let targetPanel = document.querySelector(dataAttribute)

        panels.forEach((panel) => {
            if(panel === targetPanel){
                panel.classList.add('active')
            }else {
                panel.classList.remove('active')
            }
        })
    }
})