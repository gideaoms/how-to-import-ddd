import * as Repositories from "../../core/repositories/mod.js";
import * as Models from "../../core/models/mod.js";

export class Repository implements Repositories.Todo.Repository {
  readonly _todos: Models.Todo.Model[] = [];

  create(todo: Models.Todo.Model) {
    const todoWithId = new Models.Todo.Model({
      ...todo,
      id: String(this._todos.length + 1).padStart(6, "0"),
    });
    this._todos.push(todoWithId);
    return todoWithId;
  }
}
