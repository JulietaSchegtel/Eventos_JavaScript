window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let inputTitulo = document.getElementById('titulo');
    let estadoSecreto = 0;

    const checkkey = (key) => {
        switch (true) {
            case key === "s" && estadoSecreto === 0:
                ++estadoSecreto;
                console.log(estadoSecreto)
                break;
                case key === "e" && estadoSecreto === 1:
                    ++estadoSecreto;
                    console.log(estadoSecreto)
                    break;
                    case key === "c" && estadoSecreto === 2:
                        ++estadoSecreto;
                        console.log(estadoSecreto)
                        break;
                        case key === "r" && estadoSecreto === 3:
                            ++estadoSecreto;
                            console.log(estadoSecreto)
                            break;
                            case key === "e" && estadoSecreto === 4:
                                ++estadoSecreto;
                                console.log(estadoSecreto)
                                break;
                                case key === "t" && estadoSecreto === 5:
                                    ++estadoSecreto;
                                    console.log(estadoSecreto)
                                    break;
                                    case key === "o" && estadoSecreto === 6:
                                        estadoSecreto;
                                        alert('secreto magico')
                                        break;
            default:
                estadoSecreto = 0;
                break;
        }
    }
    
    inputTitulo.addEventListener('keyup', (e) => {
        checkkey(e.key) 
    })
  /*   inputTitulo.addEventListener('keyup',(e) => {
        console.log('up',e)
    })
    inputTitulo.addEventListener('keypress',(e) => {
        console.log('press',e)
    })
 */

}