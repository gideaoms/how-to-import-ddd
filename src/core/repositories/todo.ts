import * as Models from "../models/mod.js";

export type Repository = {
  create(todo: Models.Todo.Model): Models.Todo.Model;
};
