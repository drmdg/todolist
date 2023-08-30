export const todolist = (project,title, description, duedate, priority) => {
    // const sayHello = () => console.log('hello!');
    function getproject () {return this.project;}
    function gettitle () {return this.title;}
    function getdescription () {return this.description;}
    function getduedate () {return this.duedate;}
    function getpriority() {return this.priority;}


    

    
    return { project,title, description, duedate, priority, getproject ,gettitle, getdescription,getduedate,getpriority };
  };
  