import { PrismaClient } from '@prisma/client';
import { createParticipants } from './createParticipants';
import { createEvents } from './createEvents';

const prisma = new PrismaClient();

async function main() {
    await createEvents();
    await createParticipants();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
