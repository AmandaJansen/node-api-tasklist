import {Router} from'express'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import TaskController from './app/controllers/TaskController';


const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//Rotas que devem estar autenticadas se encontram abaixo do middleware
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/tasks', TaskController.store);

routes.get('/tasks', TaskController.index);

routes.put('/tasks/:task_id', TaskController.update);

routes.delete('/tasks/:task_id', TaskController.delete);


export default routes;