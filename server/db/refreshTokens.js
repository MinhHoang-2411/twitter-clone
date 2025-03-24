import prisma from "~/lib/prisma"
 
 export const createRefreshToken = (refreshToken) => {
     return prisma.refreshToken.create({
         data: refreshToken
     })
 }