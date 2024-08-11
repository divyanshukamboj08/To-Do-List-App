let inputbx=document.getElementById('inputbox');
let lst=document.getElementById('list');
let but=document.getElementById('btn');

btn.addEventListener('click',()=>{
       if(inputbx.value===''){
        alert('Please enter a value');
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputbx.value;
        lst.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbx.value='';
    savedata();
});
lst.addEventListener("click",function(e){
       if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
},false);

function savedata(){
    localStorage.setItem("data",lst.innerHTML);
}
function showtask(){
    lst.innerHTML=localStorage.getItem("data");
}
showtask();
