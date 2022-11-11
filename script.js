let num = document.querySelector('input#txttela01')
let res = document.querySelector('div#res')
let maxres  = document.querySelector('p#max')    
let minres = document.querySelector('p#min')    
let mediares = document.querySelector('p#media')    
let somares = document.querySelector('p#soma')    
let select = document.querySelector('select#barraselect')
let array = []


function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100 ){
        return true
    } else { 
        return false 
    }
    }
    function inLista(n, l){
        if ( l.indexOf(Number(n)) !=-1 ){
            return true

        } else{
            return false
        }

    }   

function verificar() {
  

        if ( isNumero(num.value) && !inLista(num.value, array)) {
            array.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            select.appendChild(item)
            res.innerHTML = ''
            maxres.innerHTML = ''
            somares.innerHTML = ''
            mediares.innerHTML = ''
            minres.innerHTML = ''
           


        } else{
            window.alert(' inválido ou Já se encontra na lista')
        } 
        num.value = ''
        num.focus()

    }
    
    
function finalverificar() {
    if ( array.length == 0) {
        window.alert('Por gentileza, adicionar número no campo adicionar.')
    }
    else{
        let tot = array.length
        let max = array[0]
        let min = array [0]
        let soma = 0
        let media = 0
        for ( pos in array){
            
            soma +=  array[pos]
            if(array[pos] >= max ) {
                max = array[pos]
            if(array[pos] <= min ) 
                    min = array[pos]
            
            }
        
    
        }
        
        media = soma/tot
       

        res.innerHTML = `Total de elementos cadastrados ${tot} `
        maxres.innerHTML = `O maior número cadastrado é <strong>${max}</strong>`
        minres.innerHTML =  `O menor número cadastrado é <strong>${min}</strong>`
        mediares.innerHTML = `A média dos números cadastrados é <strong>${media}</strong>`
        somares.innerHTML = `A Soma total dos números cadastrados é <strong>${soma}</strong>`
    }
  
}