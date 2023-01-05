export type Status = "todo" | "doing" | "done";

export class Model {
  readonly id: string;
  readonly description: string;
  readonly status: Status;

  constructor(todo: { id: string; description: string; status: Status }) {
    this.id = todo.id;
    this.description = todo.description;
    this.status = todo.status;
  }

  toDoing() {
    return new Model({ ...this, status: "doing" });
  }

  isDoing() {
    return this.status === "doing";
  }

  isDone() {
    return this.status === "done";
  }
}
