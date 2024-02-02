import Oweb from 'owebjs';
import RapidEnv from 'rapidenv';
import { info } from '@/utils/logger';
{{imports}}

RapidEnv().load();

async function main() {
    const oweb = await new Oweb({
        maxParamLength: 350,
        uWebSocketsEnabled: {{uWebSocketsEnabled}},
    }).setup();

    {{fastifyPlugins}}

    await oweb.loadRoutes({ directory: 'dist/routes' });
    const { address } = await oweb.start({ host: process.env.HOST, port: +process.env.PORT });

    info(`Server started on ${address}`);
}

main();
