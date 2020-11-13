function trenanim0() {

}
function estatictren() {
    let tren = document.querySelector('#tren');
let positi5a = tren.getAttribute('position');
let opsitya = Object.values(positi5a);
let opsity2a = parseInt(opsitya[0]);
let opsity4a = parseInt(opsitya[2]);
opsitya[0] = opsity2a;
opsitya[2] = opsity4a;
let position12 = document.createAttribute('position');
let qwea = JSON.stringify(opsitya);
let qwe1a = JSON.stringify(qwea);
let qwe2a = qwe1a.replace(/{/g,'');
let qwe3a = qwe2a.replace(/}/g,'');
let qwe4a = qwe3a.replace(/z/g,'');
let qwe5a = qwe4a.replace(/,/g,' ');
let qwe6a = qwe5a.replace(/:/g,'');
let qwe7a = qwe6a.replace(/x/g,'');
let qwe8a = qwe7a.replace(/y/g,'');
let qwe9a = qwe8a.replace(/"/g,'');
let qwe10a = qwe9a.replace(/]/g,'');
let qwe11a = qwe10a.slice(1);
position12.value = qwe11a;
tren.setAttributeNode(position12);

let tren1 = document.querySelector('#tren1');
let attr1 = document.createAttribute('attribute');
let to1 = document.createAttribute('to'); 
let dur1 = document.createAttribute('dur'); 

attr1.value = "rotation";
tren1.setAttributeNode(attr1);
to1.value = "-90 0 0";
tren1.setAttributeNode(to1);
dur1.value = "0";
tren1.setAttributeNode(dur1);
}
