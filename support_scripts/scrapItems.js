var table = document.getElementsByTagName('table')[1]
var data = []
for (var i = 1; i < table.rows.length; i++) {
    const obj = {}
    const a = table.rows[i].cells[4].getElementsByTagName('img')[0].src
    const b = table.rows[i].cells[5].textContent;
    const links = table.rows[i].cells[6].getElementsByTagName('a').getElementsByTagName('img').src // Need to change
        //No console.log loops, break chrome
    console.log(links)
    obj.src = a;
    obj.name = b
    data.push(obj)
}
console.log(data)