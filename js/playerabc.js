// ..disparar
function dis() {
    if (event.key == "+") {
        balas();
    }
}
function disparar() {
    window.addEventListener('keypress' ,function () {
    dis();
      });
};
disparar();
function pararbalaa() {
    let material = document.createAttribute('material');
    let repeat = document.createAttribute('repeat');
        material.value = "opacity:0;";
        bala.setAttributeNode(material);
        repeat.value = "0";
        balanim.setAttributeNode(repeat);
}
function pararbalas(){
window.addEventListener('keyup' ,e => {
    pararbalaa();
})
};
function balas() {
let bala = document.querySelector('#bala');
let balanim = document.querySelector('#balanim');
let material = document.createAttribute('material');
let to = document.createAttribute('to');
let repeat = document.createAttribute('repeat');
material.value = "opacity:1;color:black";
bala.setAttributeNode(material);
repeat.value = "infinite";
balanim.setAttributeNode(repeat);
pararbalas();
}
// ..disparar fin
// ..balas barra frontal interactiv
function bal1() {
    let balaclas1 = document.querySelector('#balas1');
    let visible = document.createAttribute('visible');
visible.value = "true";
balaclas1.setAttributeNode(visible);
bal2();
}
function bal2() {
let balaclas2 = document.querySelector('#balas2');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas2.setAttributeNode(visible);
bal3();
}
function bal3() {
let balaclas3 = document.querySelector('#balas3');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas3.setAttributeNode(visible);
bal4();
}
function bal4() {
let balaclas4 = document.querySelector('#balas4');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas4.setAttributeNode(visible);
bal5();
}
function bal5() {
let balaclas5 = document.querySelector('#balas5');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas5.setAttributeNode(visible);
bal6();
}
function bal6() {
let balaclas6 = document.querySelector('#balas6');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas6.setAttributeNode(visible);    
bal7();
}
function bal7() {
let balaclas7 = document.querySelector('#balas7');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas7.setAttributeNode(visible);    
bal8();
}
function bal8() {
let balaclas8 = document.querySelector('#balas8');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas8.setAttributeNode(visible);    
bal9();
}
function bal9() {
let balaclas9 = document.querySelector('#balas9');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas9.setAttributeNode(visible);    
bal10();
}
function bal10() {
let balaclas10 = document.querySelector('#balas10');
let visible = document.createAttribute('visible');
visible.value = "true";
balaclas10.setAttributeNode(visible);    
}
// ..balas barra frontal interactiv FIIIIIN fin
//   ..saltar
function tiempo() {
    let playerabc = document.querySelector('#player');
    let saltar = document.querySelector('#saltar');
       let attr = document.createAttribute('attribute');
       let to = document.createAttribute('to');
       playerabc.appendChild(saltar);
       to.value = "0 0 0";
       saltar.setAttributeNode(to);
    attr.value = "rotation";
    saltar.setAttributeNode(attr);
}
function salt() {
    let playerabc = document.querySelector('#player');
    let saltar = document.querySelector('#saltar');
       let ids = document.createAttribute('id');
       let attrs = document.createAttribute('attribute');
       let tos = document.createAttribute('to');
      playerabc.appendChild(saltar);
      ids.value = "saltar";
      saltar.setAttributeNode(ids);
      tos.value = "0 3 0";
      saltar.setAttributeNode(tos);
      attrs.value = "position";
      saltar.setAttributeNode(attrs);
  }
  function satl() {
      if (event.key == "b") {
          salt();
      }
      if (event.key == "B") {
          salt();
      }
  }
  function saltarr() {
      window.addEventListener('keypress' ,function () {
      satl();
        });
  }
//   ..saltar fin