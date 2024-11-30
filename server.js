"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
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
        return { hello: 'world!' };
    }
});
async function main() {
    try {
        await fastify.listen({
            port: 3000
        });
    }
    catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
}
main();
