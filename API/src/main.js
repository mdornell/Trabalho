import { fastify } from 'fastify';
import connectDB from './db/connection.js';
import bookRoutes from './routes/Routes.js';



export class Main {
    constructor() {
        this.init();
    }

    async init() {
        const server = fastify();

        await connectDB();


        bookRoutes(server);

        server.listen({ port: 3000 }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`Servidor rodando em ${address}`);
        });

    }
}
