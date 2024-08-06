const btnC = document.getElementById('btnC')
const egal = document.getElementById('egal')
const btnVir = document.getElementById('btnVir')
const btnParO = document.getElementById('btnParO')
const btnParF = document.getElementById('btnParF')
const btn0 = document.getElementById('btn0')
const form = document.getElementById('backgr')
const btnDiv = document.getElementById('btnDiv')
const btnPlus = document.getElementById('btnPlus')
const btnFois = document.getElementById('btnFois')
const btnMoins = document.getElementById('btnMoins')
const btnCE = document.getElementById('btnCE')
const btn9 = document.getElementById('btn9')
const btn8 = document.getElementById('btn8')
const btn7 = document.getElementById('btn7')
const btn6 = document.getElementById('btn6')
const btn5 = document.getElementById('btn5')
const btn4 = document.getElementById('btn4')
const btn3 = document.getElementById('btn3')
const btn2 = document.getElementById('btn2')
const btn1 = document.getElementById('btn1')
const textArea = document.querySelector('#textarea');
// ajout de 4
function c4(){btn4.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '4'
    onUpdate()
})}
// vide(efface) la calculatrice
function cleanALl(){ btnCE.addEventListener('click',(e)=>{
    e.preventDefault()
    textArea.classList.remove('red')
    textArea.value=''
    onUpdate()
})}
// operateur division
function divBy(){btnDiv.addEventListener('click',(e)=>{
    e.preventDefault()
    textArea.value += ' / '
})}
// operateur addition
function addBy(){btnPlus.addEventListener('click',(e)=>{
    e.preventDefault()
    textArea.value += ' + '
})}
// operateur soustraction
function minBy(){btnMoins.addEventListener('click',(e)=>{
    e.preventDefault()
    textArea.value += ' - '
})}
// operateur multiplication
function multBy(){btnFois.addEventListener('click',(e)=>{
    e.preventDefault()
    textArea.value += ' * '
})}
// ajout de 1
function c1(){btn1.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '1'
    onUpdate()
})}
// Evalue une expression mathematique 
function egalite(){egal
    .addEventListener('click', (e)=>{
    e.preventDefault();
    document.body.classList.remove('bonjour')
        try{
            const signe = textArea.value.split(' ')[1]
            const signeP = textArea.value.split(' ')
            if(signeP.length<=1){
                textArea.value = '${textArea.value}'
            }
            if(signeP.length<5){
                const gauche = parseFloat(textArea.value.split(`${signe}`)[0])
                const droite = parseFloat(textArea.value.split(`${signe}`)[1])
                const contentValue = '' + gauche + signe + droite
                textArea.value = `${eval(contentValue)}`
                console.log(signeP)
                onUpdate()}
            }
            //textArea.value = eval(textArea.value)
            catch(e){
            textArea.classList.toggle('red')
            textArea.value = 'Error'
            setTimeout(()=>{
                textArea.classList.remove('red')
                textArea.value = ''
                onUpdate()
            },1000)
        }
    }
)}
// ajout d'une parenthese ouvrante

function cParO(){btnParO.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '('
    onUpdate()
})}
// ajout d'une parenthese fermante
function cParF(){btnParF.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += ')'
    onUpdate()
})}
// Suppression d'un nombre
function cC(){btnC.addEventListener('click', (e)=>{
    e.preventDefault();
    let input= textArea.value
    textArea.classList.remove('red')
    let tmp = input.slice(0,-1)
    textArea.value = tmp
    onUpdate()
})}
// ajout de 8
function c8(){btn8.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '8'
    onUpdate()
})}
// ajout de 0
function c0(){btn0.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '0'
    onUpdate()
})}
// ajout de 5
function c5(){btn5.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '5'
    onUpdate()
})}
// ajout de 3
function c3(){btn3.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '3'
    onUpdate()
    })
    btn3.addEventListener('keydown',(e)=>{
        if(e.key==='3'){
            e.preventDefault()
            textArea.value += '3'
            onUpdate()
    }
})}
// ajout de 6
function c6(){btn6.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '6'
    onUpdate()
})}
function cVir(){btnVir.addEventListener('click', (e)=>{
    e.preventDefault();
        textArea.value += '.'
        onUpdate()
})}
// ajout de 2
function c2(){btn2.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '2'
    onUpdate()
})}
// ajout de 9
function c9(){btn9.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '9'
    onUpdate()
})}
// ajout de 7
function c7(){btn7.addEventListener('click', (e)=>{
    e.preventDefault();
    textArea.value += '7'
    onUpdate()
})}
// appel au fonction, si la calculatrice est vide
if(textArea.getText =! null ){
    `{${cleanALl()}${egalite()}${addBy()}${divBy()}${minBy()}${multBy()}${cVir()}{${cC()}{${c0()}${c1()}${c2()}${c3()}${c4()}${c5()}${c6()}${c7()}${c8()}${c9()}${cParF()}${cParO()} 
    }`
    const store =sessionStorage.getItem('textArea')?.toString()
    textArea.value = ''
    if(store){
        textArea.value = `${store}`
    }
}

function onUpdate(){
    sessionStorage.setItem('textArea', `${textArea.value}`)
}
// cree un element Html, avec des attributs
/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @returns {HTMLElement}
 */
function createElementBy(tagName, attributes={}){
    const  element = document.createElement(tagName);
    for(const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute,value)
    }
return element;
}
