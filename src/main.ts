import * as Services from "./core/services/mod.js";
import * as Repositories from "./infra/repositories/mod.js";

const todoRepository = new Repositories.Todo.Repository();
const createTodo = new Services.CreateTodo.Service(todoRepository);

const description = "This is my first todo";
const createdTodo = createTodo.exec(description);

console.log(createdTodo);

const doingTodo = createdTodo.toDoing();

if (doingTodo.isDoing()) {
  console.log("This todo is doing now: ", doingTodo);
}
