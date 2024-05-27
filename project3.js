function addnote() {  //get input
    let inputnote = document.querySelector('input')
    let newnote = document.createElement('div')
    newnote.className='list'
    newnote.innerHTML = inputnote.value
    newnote.style.backgroundColor = inputnote.style.backgroundColor
    let newtrash = document.createElement('img')
    newtrash.className = 'trash'
    newtrash.setAttribute('src','https://icongr.am/entypo/trash.svg?size=20&color=currentColor')
    newtrash.setAttribute('title','remove')
    newnote.append(newtrash)
    let mainlist =  document.getElementById('mainlist')
    mainlist.appendChild(newnote)
    inputnote.value=''
    inputnote.style.backgroundColor='aqua'
}
//  change colore of input background
function red(){
    document.querySelector('input').style.backgroundColor = 'red'
}
function blue(){
    document.querySelector('input').style.backgroundColor = 'blue'
}
function green(){
    document.querySelector('input').style.backgroundColor = 'green'
}
function white(){
    document.querySelector('input').style.backgroundColor = 'white'
}
//  remove note from list
window.onload = function(){
    let mainlist =  document.getElementById('mainlist')
    mainlist.addEventListener('click',function(event){
    console.log(event)
    let trash1 = document.querySelectorAll('.trash')
    console.log(trash1)
    console.log(event.target)

    for(let i=0;i<trash1.length;i++){
         if(trash1[i] == event.target){
            trash1[i].parentElement.remove()
         }
        }
    })
}
// erease data in input
function inputtrash(){
    let inputnote = document.querySelector('input')
    inputnote.value=''
}
setInterval(function(){ //change backgroundcolor every two seconde 
    let redvalue = Math.floor(Math.random() * 255)
    let greenvalue = Math.floor(Math.random() * 255)
    let bluevalue = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = 'rgb('+redvalue+','+greenvalue+','+bluevalue+')'
},2000)
