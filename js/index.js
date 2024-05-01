const main = document.querySelector('main');
const addChar = document.getElementById('roster');
const eleFilter = document.getElementById('e-filter');
const pathFilter = document.getElementById('p-filter');
const addReset = document.getElementById('addReset');
const addCollection = document.getElementById('addCollection');
const subCollection = document.getElementById('subCollection');
const collection = document.getElementById('collection');
const feedback = document.getElementById('feedback')
const team = [];
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
    const dropdown = document.createElement('select');
    const choose = document.createElement('option');
    choose.setAttribute('value', '');
    choose.textContent = 'Collection';
    dropdown.appendChild(choose);
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
    option.setAttribute('selected', '');
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
                drop.removeChild(drop.children[x+1]);
                if(drop.value === ''){
                    drop.parentElement.firstElementChild.src='./images/0000.png'
                    while (drop.parentElement.lastElementChild != drop) {
                        drop.parentElement.lastElementChild.remove();
                    }
                }
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
    const roles = [];
    roster.forEach(character =>{
        if(event.target.value ===  character.name){
            buildCard(event, character);
        }
        for(drop of dropdowns){
            if(drop.value === character.name){
                character.roles.forEach (role => {
                    roles.push(role);
                });                
            }
        }
    });
    // console.log(event.srcElement.parentElement);

    feedback.lastElementChild.innerText = `Here are the roles you have: ${roles.join(', ')}`;
}
function buildCard(event, character){
    clearCard(event);
    const papa = event.srcElement.parentElement;
    event.target.previousSibling.setAttribute('src','./images/'+character.image+'.png');
    papa.appendChild(document.createElement('ul'));
    const name = document.createElement('li');
    name.innerText = `Name: ${character.name}`;
    papa.lastElementChild.appendChild(name);
    const ele = document.createElement('li');
    ele.innerText = `Element: ${character.element}`;
    papa.lastElementChild.appendChild(ele);
    const path = document.createElement('li');
    path.innerText = `Path: ${character.path}`;
    papa.lastElementChild.appendChild(path);
    character.roles.forEach (role => {
        const li = document.createElement('li');
        li.innerText = role;
        papa.lastElementChild.appendChild(li);
    });
    // Tags are a future Quinn problem
    // character.tags.forEach (tag => {
    //     const li = document.createElement('li');
    //     li.innerText = tag;
    //     papa.lastElementChild.appendChild(li);
    // });
}
function clearCard(event){
    event.target.previousSibling.setAttribute('src','./images/0000.png');
    while (event.srcElement.parentElement.lastElementChild != event.target) {
        event.srcElement.parentElement.lastElementChild.remove();
    }
}