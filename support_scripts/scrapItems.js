//Definitive Script

var table = document.getElementsByTagName('table')[1]
var data = []
for (var i = 1; i < table.rows.length; i++) {
    const obj = {}
    const a = table.rows[i].cells[4].getElementsByTagName('img')[0].src
    const b = table.rows[i].cells[5].textContent;
    const links = table.rows[i].cells[6].getElementsByTagName('a') // Need to change
    const pokemons = []
    for (let i = 0; i < links.length; i++) {
        const obj = {}
        const link = links[i];
        const title = link.getAttribute('title');
        const img = link.querySelector('img');
        const src = img.getAttribute('src');
        obj.title = title
        obj.src = src
        pokemons.push(obj)
    }
    obj.pokemons = pokemons
    obj.src = a;
    obj.name = b
    data.push(obj)
}
//


var table = document.getElementsByTagName('table')[1]
var data = []
for (var i = 1; i < table.rows.length; i++) {
    const obj = {}
    const a = table.rows[i].cells[4].getElementsByTagName('img')[0].src
    const b = table.rows[i].cells[5].textContent;
    const links = table.rows[i].cells[6].getElementsByTagName('a') // Need to change
    const pokemons = []
    for (let i = 0; i < links.length; i++) {
        const obj = {}
        const link = links[i];
        const title = link.getAttribute('title');
        const img = link.querySelector('img');
        const src = img.getAttribute('src');
        obj.img = img
        obj.src = src
        pokemons.push(obj)
    }
    obj.src = a;
    obj.name = b
    data.push(obj)
}

//

var table = document.getElementsByTagName('table')[1]
var data = []
for (var i = 1; i < table.rows.length; i++) {
    const obj = {}
    const a = table.rows[1].cells[4].getElementsByTagName('img')[0].src
    const b = table.rows[1].cells[5].textContent;
    const links = table.rows[1].cells[6].getElementsByTagName('a') // Need to change
    const pokemons = []
    for (let i = 0; i < links.length; i++) {
        const obj = {}
        const link = links[i];
        const title = link.getAttribute('title');
        const img = link.querySelector('img');
        const src = img.getAttribute('src');
        obj.title = title
        obj.src = src
        pokemons.push(obj)
    }
    obj.src = a;
    obj.name = b
    data.push(obj)
}

//
console.log(data)

var table = document.getElementsByTagName('table')[1]
var data = []

const links = table.rows[1].cells[6].getElementsByTagName('a') // Need to change
const pokemons = []
for (let i = 0; i < links.length; i++) {
    const obj = {}
    const link = links[i];
    const title = link.getAttribute('title');
    const img = link.querySelector('img');
    const src = img.getAttribute('src');
    obj.title = title
    obj.src = src
    pokemons.push(obj)
}


var table = document.getElementsByTagName('table')[0]
var data = []

const links = table.rows[1].cells[6].getElementsByTagName('a') // Need to change
const pokemons = []
for (let i = 0; i < links.length; i++) {
    const obj = {}
    const link = links[i];
    const title = link.getAttribute('title');
    const img = link.querySelector('img');
    const src = img.getAttribute('src');
    obj.title = title
    obj.src = src
    pokemons.push(obj)
}


var table = document.getElementsByTagName('table')[0]
var tableLength = table.rows.length
var data = []
for (let i = 1; i < tableLength; i++) {
    const src = table.rows[i].cells[0].querySelector('img').getAttribute('src')
    const name = table.rows[i].cells[0].innerText
    const skill = table.rows[i].cells[1].innerText
    const time = table.rows[i].cells[2].innerText
    const craft = table.rows[i].cells[3].textContent.trim()

    const obj = {}
    obj.time = time
    obj.craft = craft
    obj.skill = skill
    obj.src = src
    obj.name = name
    data.push(obj)


}

console.log(data)

// Complement

function getFullName(abbr) {
    const abbrs = abbr.split(' ');
    const lastAbbr = abbrs.pop();
    const fullName = abbrs.map((abbr) => {
        return abbr.charAt(0).toUpperCase() + abbr.slice(1);
    }).join(' ');
    return fullName + ' ' + lastAbbr;
}
data.forEach((object) => {
    const craftArray = object['craft'].split(/\s{2,}/).map((item) => {
        const [quantity, abbr] = item.match(/(\d+)\s+(.+)/).slice(1);
        const name = getFullName(abbr);
        return {
            quantity: parseInt(quantity),
            name: name
        };
    });

    object['craft'] = craftArray;
});