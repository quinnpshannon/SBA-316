// import * as roster from './roster.js';
const addChar = document.getElementById('roster');
const eleFilter = document.getElementById('e-filter');
const pathFilter = document.getElementById('p-filter');
const addReset = document.getElementById('addReset');
const addCollection = document.getElementById('addCollection');
const subCollection = document.getElementById('subCollection');
const collection = document.getElementById('collection');
pathFilter.addEventListener('change',popDropdowns);
eleFilter.addEventListener('change',popDropdowns);
addReset.addEventListener('click',reset);
addCollection.addEventListener('click',popCollection);
subCollection.addEventListener('click',remCollection);
elements.forEach(element => {
    const option = document.createElement('option');
    option.setAttribute('value', element);
    option.textContent = element;
    eleFilter.appendChild(option);
});
paths.forEach(path => {
    const option = document.createElement('option');
    option.setAttribute('value', path);
    option.textContent = path;
    pathFilter.appendChild(option);
});
popDropdowns();
function popDropdowns(event){
    while (addChar.lastElementChild != null) {
        addChar.lastElementChild.remove();
    }
    roster.forEach(character => {
        if(character.chkEle(eleFilter.value) && character.chkPath(pathFilter.value)){
            const option = document.createElement('option');
            option.setAttribute('value', character.name);
            option.textContent = character.name;
            addChar.appendChild(option);
        }
    });
}
function popCollection(){
    console.log(collection.children.length);
    for(let x = 0;x<collection.children.length;x++)
    {
        if(collection.children[x].value === addChar.value) return;
    }
    const option = document.createElement('option');
    option.setAttribute('value', addChar.value);
    option.textContent = addChar.value;
    collection.appendChild(option);
}
function remCollection(){
    for(let x = 0;x<collection.children.length;x++)
    {
        if(collection.children[x].value === collection.value) collection.removeChild(collection.children[x]);
    }
}
function reset(event){
    event.preventDefault();
    eleFilter.value = 'All';
    pathFilter.value = 'All';
    popDropdowns();
}