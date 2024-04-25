const addChar = document.getElementById('roster');
const eleFilter = document.getElementById('e-filter');
const pathFilter = document.getElementById('p-filter');
const addReset = document.getElementById('addReset');
pathFilter.addEventListener('change',popDropdowns);
eleFilter.addEventListener('change',popDropdowns);
addReset.addEventListener('click',popDropdowns);
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
        // We don't need this now! Because it is updating the Dropdowns!
        // let roles = '';
        // let tags = '';
        // console.log(`Name: ${character.name}`);
        // console.log(`Banner: ${character.banner}`);
        // console.log(`Element: ${character.element}`);
        // console.log(`Path: ${character.path}`);
        // character.roles.forEach(role => {
        //     roles +=role;
        //     roles +=', '
        // });
        // roles.length -=2;
        // character.tags.forEach(tag => {
        //     tags +=tag;
        //     tags +=', '
        // });
        // tags.length -=2;
        // console.log(`Roles: ${roles.slice(0,roles.length-2)}`);
        // console.log(`Tags: ${tags.slice(0,tags.length-2)}`);
        // console.log(`---------------`);
        if(character.chkEle(eleFilter.value) && character.chkPath(pathFilter.value)){
            const option = document.createElement('option');
            option.setAttribute('value', character.name);
            option.textContent = character.name;
            addChar.appendChild(option);
        }
    });
}
