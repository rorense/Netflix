import { PrismaClient } from "@prisma/client";

// To prevent next js hot-reloading from creating a bunch of files
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb == client;

export default client;