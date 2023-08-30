import _ from 'lodash';
import { todolist } from './todo';
import { apresentarsite } from './logic';

let todo = todolist("titulo", "descrição","data","prioridade");
console.log(todo.title);
apresentarsite();