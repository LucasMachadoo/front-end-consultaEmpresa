import { PrismaClient } from "@prisma/client"

// ensure singleton to prevent hot-reloading from creating new instances of PrismaClient
declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
