roster.forEach(character => {
    let roles = '';
    let tags = '';
    console.log(`Name: ${character.name}`);
    console.log(`Banner: ${character.banner}`);
    console.log(`Element: ${character.element}`);
    console.log(`Path: ${character.path}`);
    character.roles.forEach(role => {
        roles +=role;
        roles +=', '
    });
    roles.length -=2;
    character.tags.forEach(tag => {
        tags +=tag;
        tags +=', '
    });
    tags.length -=2;
    console.log(`Roles: ${roles.slice(0,roles.length-2)}`);
    console.log(`Tags: ${tags.slice(0,tags.length-2)}`);
    console.log(`---------------`); 
});
