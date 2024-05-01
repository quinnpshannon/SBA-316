class Character {
    name='';
    roles=[];
    banner='';
    tags=[];
    element='';
    path='';
    stars=0;
    image='';
    addTag= function (newTag) {
        this.tags.push(newTag);
    };
    addRole= function (newRole) {
        this.roles.push(newRole);
    };
    constructor(name, banner, element, path, image, stars=5) {
        this.name = name;
        this.banner = banner;
        this.element = element;
        this.path = path;
        this.image = image;
        this.stars = stars;
    }
    chkEle= function(element) {
        switch (element) {
            case 'All':
            case this.element:
              return true;
            default:
              return false;
        }
    }
    chkPath= function(path) {
        switch (path) {
            case 'All':
            case this.path:
              return true;
            default:
              return false;
        }
    }
    populate = function(){
        return [this.name, this.path, this.element]
    }
}
const roster=[];
roster.push(new Character('Acheron', 'Limited', 'Lightning', 'Nihility', '3017'));
roster[0].addRole('DPS'); roster[0].addTag('Ultimate'); roster[0].addTag('Carry'); 
roster.push(new Character('Aventurine', 'Limited', 'Imaginary', 'Preservation', '3018'));
roster[1].addRole('Sustain'); roster[1].addRole('Sub-DPS'); roster[1].addTag('Follow-up'); roster[1].addTag('Shielder');
roster.push(new Character('Argenti', 'Limited', 'Physical', 'Erudition', '3009'));
roster[2].addRole('DPS'); roster[2].addTag('Ultimate'); roster[2].addRole('Carry');
roster.push(new Character('Bailu', 'Standard', 'Lightning', 'Abundance', '1211'));
roster[3].addRole('Sustain'); roster[3].addTag('Healer'); roster[3].addTag('Revive');
roster.push(new Character('Black Swan', 'Limited', 'Wind', 'Nihility', '3014'));
roster[4].addRole('DPS'); roster[4].addRole('Sub-DPS'); roster[4].addTag('DOT');
roster.push(new Character('Blade', 'Limited', 'Wind', 'Destruction', '1205'));
roster[5].addRole('DPS'); roster[5].addTag('Self Damage'); roster[5].addTag('Ultimate'); roster[5].addTag('Carry');
roster.push(new Character('Bronya', 'Standard', 'Wind', 'Harmony', '1101'));
roster[6].addRole('Support'); roster[6].addTag('Turn Order'); roster[6].addTag('Team Buffer');
roster.push(new Character('Clara', 'Standard', 'Physical', 'Destruction', '1107'));
roster[7].addRole('DPS'); roster[7].addRole('Sub-DPS'); roster[7].addTag('Follow-Up');
roster.push(new Character('Dan Heng Imbibitor Lunae', 'Limited', 'Imaginary', 'Destruction', '3002'));
roster[8].addRole('DPS'); roster[8].addTag('Carry'); roster[8].addTag('Skill Negative'); roster[8].addTag('Basic Attack');
roster.push(new Character('Dr. Ratio', 'Limited', 'Imaginary', 'Hunt', '3012'));
roster[9].addRole('DPS'); roster[9].addRole('Sub-DPS'); roster[8].addTag('Follow-up'); roster[8].addTag('Debuffer'); roster[8].addTag('Free');
roster.push(new Character('Fu Xuan', 'Limited', 'Quantum', 'Preservation', '3003'));
roster[10].addRole('Sustain'); roster[10].addRole('Support'); roster[10].addTag('Team Buffer');
roster.push(new Character('Gepard', 'Standard', 'Ice', 'Preservation', '1104'));
roster[11].addRole('Sustain'); roster[11].addTag('Shielder'); roster[11].addTag('Self Revive');
roster.push(new Character('Himeko', 'Standard', 'Fire', 'Erudition', '1003'));
roster[12].addRole('DPS'); roster[12].addRole('Sub-DPS'); roster[12].addTag('Follow-up');
roster.push(new Character('Huohuo', 'Limited', 'Wind', 'Abundance', '3008'));
roster[13].addRole('Sustain'); roster[13].addRole('Support'); roster[13].addTag('Healer'); roster[13].addTag('Team Buffer');
roster.push(new Character('Jing Yuan', 'Limited', 'Lightning', 'Erudition', '1204'));
roster[14].addRole('DPS'); roster[14].addTag('Follow-up'); roster[14].addTag('Carry');
roster.push(new Character('Jingliu', 'Limited', 'Ice', 'Destruction', '3005'));
roster[15].addRole('DPS'); roster[15].addTag('Damage Team'); roster[15].addTag('Carry');
roster.push(new Character('Kafka', 'Limited', 'Lightning', 'Nihility', '1005'));
roster[16].addRole('DPS'); roster[16].addTag('Follow-up'); roster[16].addTag('DOT');
roster.push(new Character('Luocha', 'Limited', 'Imaginary', 'Abundance', '1203'));
roster[17].addRole('Sustain'); roster[17].addTag('Healer'); roster[17].addTag('Cleanse'); roster[17].addTag('Enemy Cleanse');
roster.push(new Character('Ruan Mei', 'Limited', 'Ice', 'Harmony', '3011'));
roster[18].addRole('Support'); roster[18].addTag('Break Efficiency'); roster[18].addTag('Team Buffer');
roster.push(new Character('Seele', 'Limited', 'Quantum', 'Hunt', '1102'));
roster[19].addRole('DPS'); roster[19].addTag('Carry'); roster[18].addTag('Turn Order');
roster.push(new Character('Silver Wolf', 'Limited', 'Quantum', 'Nihility', '1006'));
roster[20].addRole('Support'); roster[20].addTag('Debuffer');
roster.push(new Character('Sparkle', 'Limited', 'Quantum', 'Harmony', '3016'));
roster[21].addRole('Support'); roster[21].addTag('Skill Positive'); roster[21].addTag('Turn Order');
roster.push(new Character('Topaz and Numby', 'Limited', 'Fire', 'Hunt', '3006'));
roster[22].addRole('DPS'); roster[22].addRole('Sub-DPS'); roster[22].addRole('Support'); roster[22].addTag('Follow-up'); roster[21].addTag('Debuffer');
roster.push(new Character('Trailblazer Destruction', 'Free', 'Physical', 'Destruction', '8001'));
roster[23].addRole('DPS'); roster[23].addRole('Sub-DPS'); roster[23].addTag('Main Character'); roster[23].addTag('Free');
roster.push(new Character('Trailblazer Preservation', 'Free', 'Fire', 'Preservation', '8003'));
roster[24].addRole('Sustain'); roster[24].addRole('Support'); roster[24].addTag('Main Character'); roster[24].addTag('Free'); roster[24].addTag('Shielder'); roster[24].addTag('Taunt');
roster.push(new Character('Welt', 'Standard', 'Imaginary', 'Nihility', '1004'));
roster[25].addRole('Sub-DPS'); roster[25].addRole('Sustain'); roster[25].addRole('Support'); roster[25].addTag('Debuffer');
roster.push(new Character('Yanqing', 'Standard', 'Ice', 'Hunt', '1209'));
roster[26].addRole('DPS'); roster[26].addRole('Sub-DPS'); roster[26].addTag('Fragile');

const elements = [
    'All',
    'Fire',
    'Ice',
    'Imaginary',
    'Lightning',
    'Physical',
    'Quantum',
    'Wind'
];
const paths = [
    'All',
    'Abundance',
    'Destruction',
    'Erudition',
    'Harmony',
    'Hunt',
    'Nihility',
    'Preservation'
];