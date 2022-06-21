const botao = document.querySelector('#button');
const spanRelogio = document.querySelector('#relogio');


function doisDigitos(numero){
  if(numero < 10){
    return('0'+numero);
  }else{
    return(numero);
  }
}

function horario() {
  let date = new Date()
  let hora = date.getHours();
  let minuto = date.getMinutes();
  let segundo = date.getSeconds();


  function manhaOuTarde() {
    if (hora < 12) {
      spanRelogio.innerHTML = `${doisDigitos(hora)}: ${doisDigitos(minuto)}: ${doisDigitos(segundo)} AM`;
    } else {
      spanRelogio.innerHTML = `${doisDigitos(hora)}: ${doisDigitos(minuto)}: ${doisDigitos(segundo)} PM`;
    }
  }

  manhaOuTarde();

};

botao.addEventListener('click', () => {
  horario();
  let timer = setInterval(horario, 1000);
})
  