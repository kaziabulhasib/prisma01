import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {

    await prisma.user.createMany({
        data : [
             {
            name:'hasib kazi2',
            email:'hasibkazi2420@gmail.com'
        },
             {
            name:'hasib kazi3',
            email:'hasibkazi3420@gmail.com'
        },

        ]
    })

    const allUsers=await prisma.user.findMany()
    console.log(allUsers)
    
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
