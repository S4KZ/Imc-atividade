function selectMenu(page){
    let home = document.getElementById('home')
    let tabela = document.getElementById('tabela')
    let sobre = document.getElementById('sobre')
    let calcular = document.getElementById('calcular')
    let table = document.getElementById('table')
    let about = document.getElementById('about')
    switch(page){
        case 1:
            removeActive()
            calcular.style.display = 'block'
            home.classList.add('active')
        break;
        case 2:
            removeActive()
            table.style.display = 'block'
            tabela.classList.add('active')
        break;
        case 3:
            removeActive()
            about.style.display = 'block'
            sobre.classList.add('active')
        break;
    }
}

function removeActive(){
    home.classList.remove('active')
    tabela.classList.remove('active')
    sobre.classList.remove('active')
    calcular.style.display = 'none'
    table.style.display = 'none'
    about.style.display = 'none'
}
