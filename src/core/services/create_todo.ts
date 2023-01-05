import * as Repositories from "../repositories/mod.js";
import * as Models from "../models/mod.js";

export class Service {
  constructor(private readonly _todoRepository: Repositories.Todo.Repository) {}

  exec(description: string) {
    const todo = new Models.Todo.Model({
      id: undefined!,
      description: description,
      status: "todo",
    });
    return this._todoRepository.create(todo);
  }
}
