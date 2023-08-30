import { criatodo, gettodoslist, apagartodo, apagarproject,mostrarproject, gettprojectlist } from "./logic";

export function apresentarmodal() {

    let np= document.getElementById('newproject');
    np.addEventListener('click',()=>{
        let aux=document.getElementById('formcontainer');
        aux.style.cssText="display:flex";
    });
}

export function fecharmodal(){
    let fm = document.getElementById('fecharmodal');
    fm.addEventListener('click',()=>{
        let aux=document.getElementById('formcontainer');
        aux.style.cssText="display:none";
    });
}

export function catchform(){
    
    let submit = document.getElementById('submit');
    submit.addEventListener('click', criatodo);
   
}

export function atualizatela(){
    let todoslist=gettodoslist();
    let projectlist=gettprojectlist();
    console.log(todoslist);
    let posts=document.getElementById('posts');
    posts.innerHTML="";
    for(let todo of todoslist){
        
        let newdiv=document.createElement('div');
        newdiv.innerHTML=       `<h2>${todo.title}</h2>
                                <p>${todo.description}</p>
                                <p>${todo.duedate}</p>
                                <p>Prioridade: ${todo.priority}</p>    
                                <button class="delete" id=${todo.title} > x </button>`
        newdiv.classList.add('post');
        posts.appendChild(newdiv);
        document.getElementById(`${todo.title}`).addEventListener('click', (e) => {apagartodo(e.target.id)});
        
    }
    let ul=document.getElementById('projectbar');
    ul.innerHTML="";
    for(let p of projectlist){
        
        let newdiv=document.createElement('li');
        newdiv.innerHTML=`${p}<button id=${p} `;
        let aux= document.createElement('button');
        aux.innerText='X';
        aux.classList.add('delete');
        aux.setAttribute('id',`${p}`);
        aux.addEventListener('click', (e)=>{e.stopPropagation();apagarproject(e.target.id)});
        newdiv.appendChild(aux);
        newdiv.setAttribute('id',`${p}`);
        newdiv.addEventListener('click',(e)=>{e.stopPropagation();atualizaproject(e.target.id)});
        ul.appendChild(newdiv);
    }
}

export function atualizaproject(projeto){
    console.log(projeto);
    let todoslist=gettodoslist();
    let projectlist=gettprojectlist();
    console.log(todoslist);
    let posts=document.getElementById('posts');
    posts.innerHTML="";
    for(let todo of todoslist){
        if(todo.project==projeto){
        let newdiv=document.createElement('div');
        newdiv.innerHTML=       `<h2>${todo.title}</h2>
                                <p>${todo.description}</p>
                                <p>${todo.duedate}</p>
                                <p>Prioridade: ${todo.priority}</p>    
                                <button class="delete" id=${todo.title} > x </button>`
        newdiv.classList.add('post');
        posts.appendChild(newdiv);
        document.getElementById(`${todo.title}`).addEventListener('click', (e) => {apagartodo(e.target.id)});
        
    }}

    let ul=document.getElementById('projectbar');
    ul.innerHTML="";
    for(let p of projectlist){
        let newdiv=document.createElement('li');
        newdiv.innerHTML=`${p}`;
        let aux= document.createElement('button');
        aux.innerText='X';
        aux.classList.add('delete');
        aux.setAttribute('id',`${p}`);
        aux.addEventListener('click', (e)=>{e.stopPropagation();apagarproject(e.target.id)});
        newdiv.appendChild(aux);
        newdiv.setAttribute('id',`${p}`);
        newdiv.addEventListener('click',(e)=>{e.stopPropagation();atualizaproject(e.target.id)});
        ul.appendChild(newdiv);
    }

}