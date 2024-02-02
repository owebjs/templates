import { Route } from 'owebjs';

export default class MainRoute extends Route {
    /**
     *
     * @param {import('owebjs').FastifyRequest} req
     * @param {import('owebjs').FastifyReply} res
     */
    handle(req, res) {
        return res.send({ message: 'Hello from create-oweb project!' });
    }
}
