const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function AddTask() {
    if (input.value === '') {
        alert("You gotta write something, IDIOT !!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        span.style.marginLeft = "10px";
        span.style.cursor = "pointer";

        li.appendChild(span);
        listContainer.appendChild(li);
    }
    input.value = '';
    savedata();
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showlist();