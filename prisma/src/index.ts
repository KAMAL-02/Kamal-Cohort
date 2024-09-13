import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string){
    const res = await prisma.user.create({
        data:{
            username,
            password
        },
        select:{
            username:true,
        }
    });
    return res ; 
}

insertUser("Kamal", "123").then((res)=>{
    console.log(res);
})