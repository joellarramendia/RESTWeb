import type { TodoEntity } from "../../entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";

export interface DeleteTodoUseCase {
    excute(id: number): Promise<TodoEntity>
}


export class DeleteTodo implements DeleteTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ) { }

    excute(id: number): Promise<TodoEntity> {
        return this.repository.deleteById(id)
    }

}