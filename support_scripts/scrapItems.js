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