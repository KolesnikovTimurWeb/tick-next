
"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";

interface ProductProps{
  name:string,
  description:string,
   slug:string,
   category: string[],
}
export const getOwnerProducts = async () => {
  const authenticatedUser = await auth();

  if (!authenticatedUser) {
    return [];
  }

  const userId = authenticatedUser.user?.id;

  const products = await prisma.product.findMany({
    where: {
      userId,
    },
    include: {
      categories: true,
    },
  });
  return products;
};
export const createProduct = async({name,description,slug,category}:ProductProps) => {
   try {
      const user = await auth() 
      if (!user) {
         throw new Error("You must be signed in to create a product");
       }
      const userId = user?.user?.id
      const product = await prisma.product.create({
        data: {
          name,
          description,
          slug,
          categories: {
            connectOrCreate: category.map((name) => ({
              where: {
                name,
              },
              create: {
                name,
              },
            })),
          },
          status: "PENDING",
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return product;
    } catch (error) {
      console.error(error);
      return error;
    }
}


export const getActiveProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      categories: true,
    },
  });

  return products;
};
