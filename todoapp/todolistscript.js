const inputbox= document.
getElementById('input-box')
const listcontainer= document.
getElementById('list-container')

function addtask(){
    if(inputbox.value===""){
        alert("enter something..")
    }
    else{
        let li = document.
        createElement('li')
        li.innerHTML= inputbox.value
        listcontainer.appendChild(li)

        let span = document. 
        createElement('span')
        span.innerHTML= '\u00d7'
        li.appendChild(span)
    }
    inputbox.value=""
    saveData();
}
listcontainer.addEventListener
('click',function(e){
        if(e.target.tagName==="LI"){
            e.target.classlist.toggle
            ('checked')
            saveData();
        }else if (e.target.tagName==="span"){
            e.target.parentElement.remove()
            saveData();
        }
    }
)
function saveData(){
    localStorage.setItem('Data',listcontainer.innerHTML)
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem('Data')
}
showData();
