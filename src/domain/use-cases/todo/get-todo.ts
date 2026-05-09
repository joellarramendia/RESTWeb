import type { TodoEntity } from "../../entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";

export interface GetTodoUseCase {
    excute(id: number): Promise<TodoEntity>
}


export class GetTodo implements GetTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }

    excute(id: number): Promise<TodoEntity> {
        return this.repository.findById(id)
    }

}