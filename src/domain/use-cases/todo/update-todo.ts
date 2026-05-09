import type { UpdateTodoDto } from "../../dtos/index.js";
import type { TodoEntity } from "../../entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";

export interface UpdateTodoUseCase {
    excute(dto: UpdateTodoDto): Promise<TodoEntity>
}


export class UpdateTodo implements UpdateTodoUseCase {

    constructor(
        private readonly repository: TodoRepository
    ){}

    excute(dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(dto)
    } 

}