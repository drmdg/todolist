import { todolist } from "./todo";
import { apresentarmodal, fecharmodal,catchform,atualizatela, atualizaproject } from "./dom";

var todoslist=[];
var projectlist=[];

export function gettprojectlist(){
    return projectlist;
}


export function apagarproject(id){

    for(let i=0;i<projectlist.length;i++){
        if(projectlist[i]==id){
            projectlist.splice(i,1);
            break;
        }
    }

    for(let i=0;i<todoslist.length;){
        if(todoslist[i].project==id){
            todoslist.splice(i,1);
            console.log("fodeu");
        }else{
            i++;
        }
    }
    localStorage.setItem('td',JSON.stringify(todoslist));
    localStorage.setItem('pl',JSON.stringify(projectlist));
    atualizatela();

}

export function mostrarproject(){



}


export function apresentarsite(){
    let aux;
    apresentarmodal();
    fecharmodal();
    catchform();
    aux=document.getElementById('home');
    aux.addEventListener('click',atualizatela);
    if(localStorage.getItem('td')!=null){
        todoslist=JSON.parse(localStorage.getItem('td'));
    }
    if(localStorage.getItem('pl')!=null){
        projectlist=JSON.parse(localStorage.getItem('pl'));
    }
    atualizatela();
}

export function criatodo(){

    let td = todolist(project.value,title.value,description.value,date.value,priority.checked);
    todoslist.push(td);
    if(!projectlist.includes(td.project)){
        projectlist.push(td.project);
    }
    localStorage.setItem('td',JSON.stringify(todoslist));
    localStorage.setItem('pl',JSON.stringify(projectlist));
    atualizatela();
    
}

export function gettodoslist(){
    return todoslist;
}

export function apagartodo(apagar){
  let aux;
  let contador=0;
    for(let i=0;i<todoslist.length;i++){
        if(todoslist[i].title==apagar){
            aux=todoslist.splice(i,1);
            break;
        }
    }
    for (let td of todoslist){
        if(td.project == aux[0].project){
            contador++;
        }
    }
    if (contador==0){
        for(let i=0;i<projectlist.length;i++){
            if(projectlist[i]==aux[0].project){
                aux=projectlist.splice(i,1);
                break;
            }
        }
    }

    
    localStorage.setItem('td',JSON.stringify(todoslist));
    localStorage.setItem('pl',JSON.stringify(projectlist));
    atualizatela();

}