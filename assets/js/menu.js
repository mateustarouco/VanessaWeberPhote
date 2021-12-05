function abrir(){
    if(document.getElementById('bar-1').classList.value === 'bar-1'){
        document.getElementById('bar-1').classList.value = 'bar-1-1'
        document.getElementById('bar-2').classList.value = 'bar-2-1'
        document.getElementById('bar-3').classList.value = 'bar-3-1'
        document.getElementById('conteudo').classList.value = 'menu-open'
        document.getElementById('body').classList.value = 'hiden'
        document.getElementById('menu-mobile').classList.value = 'bg-bk'
    }else{
        document.getElementById('bar-1').classList.value = 'bar-1'
        document.getElementById('bar-2').classList.value = 'bar-2'
        document.getElementById('bar-3').classList.value = 'bar-3'
        document.getElementById('conteudo').classList.value = 'none'
        document.getElementById('menu-mobile').classList.value = ''
        document.getElementById('body').classList.value = ''
    }
}
