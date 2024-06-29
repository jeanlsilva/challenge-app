import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const kenzi = await prisma.user.create({
    data: {
      email: 'kenzi.sutton@example.com',
      name: 'Kenzi Sutton',
      address: '4507 E Pecan St',
      tasks: {
        create: [
            {
                name: 'Create a to-do list',
                dueDate: new Date('2024-07-01'),
                priority: 'normal'
            },
            {
                name: 'Send an email',
                dueDate: new Date('2024-07-12'),
                priority: 'normal'
            },
            {
                name: 'Fetch weather data',
                dueDate: new Date('2024-07-25'),
                priority: 'high'
            },
        ]
      },
    },
  })
  const dora = await prisma.user.create({
    data: {
      email: 'dora.steeves@example.com',
      name: 'Dora Steeves',
      address: '6872 Samaritan Dr',
      tasks: {
        create: [
            {
                name: 'Convert currency',
                dueDate: new Date('2024-07-02'),
                priority: 'normal'
            },
            {
                name: 'Generate random quotes',
                dueDate: new Date('2024-07-10'),
                priority: 'normal'
            },
        ]
      },
    },
  })

  const brandi = await prisma.user.create({
    data: {
      email: 'brandy.rogers@example.com',
      name: 'Brandy Rogers',
      address: '2379 Crockett St',
      tasks: {
        create: [
            {
                name: 'Buy crypto',
                dueDate: new Date('2024-07-07'),
                priority: 'normal'
            },
            {
                name: 'Check market stats',
                dueDate: new Date('2024-07-11'),
                priority: 'normal'
            },
            {
                name: 'Create monthly report',
                dueDate: new Date('2024-07-22'),
                priority: 'normal'
            },
            
        ]
      },
    },
  })

  const ronnie = await prisma.user.create({
    data: {
      email: 'ronnie.peterson@example.com',
      name: 'Ronnie Peterson',
      address: '7897 Harrison Ct',
      tasks: {
        create: [
            {
                name: 'Plan friday event',
                dueDate: new Date('2024-07-04'),
                priority: 'normal'
            },
            {
                name: 'But groceries',
                dueDate: new Date('2024-07-11'),
                priority: 'normal'
            },
            {
                name: 'Get money from invitees',
                dueDate: new Date('2024-07-29'),
                priority: 'normal'
            },
        ]
      },
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })