import type { TodoEntity } from "../../entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";

export interface GetTodosUseCase {
    excute(): Promise<TodoEntity[]>
}


export class GetTodos implements GetTodosUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }

    excute(): Promise<TodoEntity[]> {
        return this.repository.getAll()
    }

}