'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito (qtdSegundos);
    minutos.textContent = formatarDigito (qtdMinutos);
    horas.textContent = formatarDigito (qtdHoras);
    dias.textContent = formatarDigito (qtDias);
}

const contagemRegressiva = (tempo)=> {
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo --;
    }
   const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    //dara referência: 1 de janeiro de 1970 
    // data que o javascript começa a contar 1 segundo = 1000 milisegundos
    const dataEvento = new Date ('2022-04-20 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());