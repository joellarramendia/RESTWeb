import { Router } from "express";
import { TodosController } from "./todos/Controller.js";
import { TodoRoutes } from "./todos/routes.js";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()
        const todoController = new TodosController()

        router.use('/api/todos', TodoRoutes.routes)


        return router
    }
}