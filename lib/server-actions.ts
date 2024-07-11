
"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";

interface ProductProps{
   name:string,
   slug:string
}

export const createProduct = async({name,slug}:ProductProps) => {
   try {
      const user = await auth() 
      if (!user) {
         throw new Error("You must be signed in to create a product");
       }
       console.log(user.user?.id)
      const userId = user?.user?.id
       console.log(userId)
      const product = await prisma.product.create({
        data: {
          name,
          slug,
          status: "PENDING",
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      console.log(product)
      return product;
    } catch (error) {
      console.error(error);
      return error;
    }
}