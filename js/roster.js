const roster = [
    {
        'name': 'Acheron',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Ultimate','Carry'],
        'element': 'Lightning',
        'path': 'Nihility'
    },
    {
        'name': 'Aventurine',
        'roles': ['Sustain','Sub-DPS'],
        'banner': 'Limited',
        'tags': ['Follow-up', 'Shielder'],
        'element': 'Imaginary',
        'path': 'Preservation'
    },
    {
        'name': 'Argenti',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Ultimate','Carry'],
        'element': 'Physical',
        'path': 'Erudition'
    },
    {
        'name': 'Bailu',
        'roles': ['Sustain'],
        'banner': 'Standard',
        'tags': ['Healer','Revive'],
        'element': 'Lightning',
        'path': 'Abundance'
    },
    {
        'name': 'Black Swan',
        'roles': ['DPS','Sub-DPS'],
        'banner': 'Limited',
        'tags': ['DOT'],
        'element': 'Wind',
        'path': 'Nihility'
    },
    {
        'name': 'Blade',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Self-Damage','Ultimate', 'Carry'],
        'element': 'Wind',
        'path': 'Destruction'
    },
    {
        'name': 'Bronya',
        'roles': ['Support'],
        'banner': 'Standard',
        'tags': ['Turn-Order', 'Team-Buffer'],
        'element': 'Wind',
        'path': 'Harmony'
    },
    {
        'name': 'Clara',
        'roles': ['DPS','Sub-DPS'],
        'banner': 'Standard',
        'tags': ['Follow-up'],
        'element': 'Physical',
        'path': 'Destruction'
    },
    {
        'name': 'Dan Heng Imbibitor Lunae',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Carry','Skill Points','Basic Attack'],
        'element': 'Imaginary',
        'path': 'Destruction'
    },
    {
        'name': 'Dr. Ratio',
        'roles': ['DPS', 'Sub-DPS'],
        'banner': 'Limited',
        'tags': ['Follow-up', 'Debuffer', 'Free'],
        'element': 'Imaginary',
        'path': 'Hunt'
    },
    {
        'name': 'Fu Xuan',
        'roles': ['Sustain','Support'],
        'banner': 'Limited',
        'tags': ['Follow-up', 'Team-Buffer'],
        'element': 'Quantum',
        'path': 'Preservation'
    },
    {
        'name': 'Gepard',
        'roles': ['Sustain'],
        'banner': 'Standard',
        'tags': ['Shielder', 'Self-Revive'],
        'element': 'Ice',
        'path': 'Preservation'
    },
    {
        'name': 'Himeko',
        'roles': ['DPS','Sub-DPS'],
        'banner': 'Standard',
        'tags': ['Follow-up'],
        'element': 'Fire',
        'path': 'Erudition'
    },
    {
        'name': 'Huohuo',
        'roles': ['Sustain','Support'],
        'banner': 'Limited',
        'tags': ['Healer', 'Team-Buffer'],
        'element': 'Wind',
        'path': 'Abundance'
    },
    {
        'name': 'Jing Yuan',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Follow-up','Carry'],
        'element': 'Lightning',
        'path': 'Erudition'
    },
    {
        'name': 'Jingliu',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Damage-Team','Carry'],
        'element': 'Ice',
        'path': 'Destruction'
    },
    {
        'name': 'Kafka',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['DOT','Follow-up'],
        'element': 'Lightning',
        'path': 'Nihility'
    },
    {
        'name': 'Luocha',
        'roles': ['Sustain'],
        'banner': 'Limited',
        'tags': ['Healer','Cleanse','Enemy-Cleanse'],
        'element': 'Imaginary',
        'path': 'Abundance'
    },
    {
        'name': 'Ruan Mei',
        'roles': ['Support'],
        'banner': 'Limited',
        'tags': ['Break-effect','Team-Buffer'],
        'element': 'Ice',
        'path': 'Harmony'
    },
    {
        'name': 'Seele',
        'roles': ['DPS'],
        'banner': 'Limited',
        'tags': ['Carry', 'Turn-Order'],
        'element': 'Quantum',
        'path': 'Hunt'
    },
    {
        'name': 'Silver Wolf',
        'roles': ['Support'],
        'banner': 'Limited',
        'tags': ['Debuffer'],
        'element': 'Quantum',
        'path': 'Nihility'
    },
    {
        'name': 'Sparkle',
        'roles': ['Support'],
        'banner': 'Limited',
        'tags': ['Skill Points','Turn-Order'],
        'element': 'Quantum',
        'path': 'Harmony'
    },
    {
        'name': 'Topaz and Numby',
        'roles': ['DPS','Sub-DPS','Support'],
        'banner': 'Limited',
        'tags': ['Follow-up', 'Debuffer'],
        'element': 'Fire',
        'path': 'Hunt'
    },
    {
        'name': 'Trailblazer Destruction',
        'roles': ['DPS','Sub-DPS'],
        'banner': 'Free',
        'tags': ['Main-Character', 'Free'],
        'element': 'Physical',
        'path': 'Destruction'
    },
    {
        'name': 'Trailblazer Preservation',
        'roles': ['Sustain','Support'],
        'banner': 'Free',
        'tags': ['Taunt','Shielder','Taunt'],
        'element': 'Fire',
        'path': 'Preservation'
    },
    {
        'name': 'Welt',
        'roles': ['Sustain','Sub-DPS', 'Support'],
        'banner': 'Standard',
        'tags': ['Debuffer'],
        'element': 'Imaginary',
        'path': 'Nihility'
    },
    {
        'name': 'Yanqing',
        'roles': ['DPS','Sub-DPS'],
        'banner': 'Standard',
        'tags': ['Follow-up'],
        'element': 'Ice',
        'path': 'Hunt'
    }
];
// const chara = {
//     'name': '',
//     'roles': [],
//     'element': '',
//     'path': '',
// };
// chara.name = 'Aventurine';
// chara.path = 'Preservation';
// chara.element = 'Imaginary';
// chara.roles.push('Sustain');
// chara.roles.push('Sub-DPS');
// roster.push(chara);