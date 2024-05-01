const main = document.querySelector('main');
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
// START OF THE FRAGMENT NONSENSE
const fragment = new DocumentFragment();
for(let x=0;x<4;x++){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const dropdown = document.createElement('select')
    img.setAttribute('src','./images/0000.png');
    img.setAttribute('height','188px');
    img.style.marginBottom = '5px';
    div.append(img);
    div.append(dropdown);
    fragment.append(div);
}
main.prepend(fragment);
const dropdowns = main.getElementsByTagName('select')
//END OF THE FRAGMENT NONSENSE
main.addEventListener('change',calculate);
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
    for(let x = 0;x<collection.children.length;x++)
    {
        if(collection.children[x].value === addChar.value) return;
    }
    const option = document.createElement('option');
    option.setAttribute('value', addChar.value);
    option.textContent = addChar.value;
    for(drop of dropdowns){
        const option = document.createElement('option');
        option.setAttribute('value', addChar.value);
        option.textContent = addChar.value;
        drop.appendChild(option);
    }
    collection.appendChild(option);
}
function remCollection(){
    for(let x = 0;x<collection.children.length;x++){
        if(collection.children[x].value === collection.value){
            collection.removeChild(collection.children[x]);
            for(drop of dropdowns){
                drop.removeChild(drop.children[x]);
            }
        }
    }
}
function reset(event){
    event.preventDefault();
    eleFilter.value = 'All';
    pathFilter.value = 'All';
    popDropdowns();
}
function calculate(event){
    roster.forEach(character =>{
        if(event.target.value ===  character.name){
            buildCard(event, character);
        }
    });
    // console.log(event.srcElement.parentElement);
}
function buildCard(event, character){
    
    event.target.previousSibling.setAttribute('src','./images/'+character.image+'.png');
    event.srcElement.parentElement.appendChild(document.createElement('ul'));
    while (event.srcElement.parentElement.lastElementChild.lastElementChild != null) {
        console.log(event.srcElement.parentElement.lastElementChild.lastElementChild);
        event.srcElement.parentElement.lastElementChild.lastElementChild.remove();
    }
    console.log(character);
    character.populate().forEach (data => {
        const li = document.createElement('li');
        li.innerText = data;
        event.srcElement.parentElement.lastElementChild.appendChild(li);
    });
}