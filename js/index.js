const addChar = document.getElementById('roster');
const eleFilter = document.getElementById('e-filter');
const pathFilter = document.getElementById('p-filter');
const addReset = document.getElementById('addReset');
pathFilter.addEventListener('change',popDropdowns);
eleFilter.addEventListener('change',popDropdowns);
addReset.addEventListener('click',reset);
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
function reset(event){
    event.preventDefault();
    eleFilter.value = 'All';
    pathFilter.value = 'All';
    popDropdowns();
}