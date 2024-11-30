import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

const fastify: FastifyInstance = Fastify({
    logger: true
});

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            type: 'object',
            properties: {
                name: { type: 'string' }
            },
            required: ['name']
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: {
                        type: 'string'
                    }
                }
            }
        },
    },
    preHandler: async (request, reply) => {

    },
    handler: async (request, reply) => {
        return { hello: 'world!' }
    }
})

async function main() {
    try {
        await fastify.listen({
            port: 3000
        });
    } catch(e) {
        fastify.log.error(e);
        process.exit(1);
    }
}

main();