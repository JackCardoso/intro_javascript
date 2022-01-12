var id = 0;
function add(){
    tarefa = document.getElementById("tarefa").value;
    id +=1
    
    var li = 
    `<li'>
        <input type='checkbox' id='${id}' value='${tarefa}' onclick='check(${id})'>
        ${tarefa}
    </li>`;

    document.getElementById("tarefas").innerHTML  += li;
}

function check(d){
    x = document.getElementById(d);
    if(x.checked){
        console.log(x.value);
        x.parentNode.style.textDecoration = "line-through";
        x.parentNode.style.color = "red";
    }
    else{
        x.parentNode.style.textDecoration = "none";
    }
}