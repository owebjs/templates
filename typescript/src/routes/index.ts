import { Route, type FastifyRequest, type FastifyReply } from 'owebjs';

export default class MainRoute extends Route {
    handle(_: FastifyRequest, res: FastifyReply) {
        return res.send({ message: 'Hello from create-oweb project!' });
    }
}
