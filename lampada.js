const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const trocando = document.getElementById ( 'trocando' );
const lamp = document.getElementById ( 'lamp' );
const statuslamp = document.getElementById ( 'statuslamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
        statuslamp.innerText = "Ligada";
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
        statuslamp.innerText = "Desligada";
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
    statuslamp.innerText = "Quebrada";
}
function reiniciar(){
    if ( isLampBroken () ) {
        statuslamp.innerText = "Aguarde 5 segundos, Estamos trocando a lâmpada";
        let espera = setTimeout(function() {
            location.reload(); 
            }, 5000)
    }  
}


turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
trocando.addEventListener ( 'click', reiniciar );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
