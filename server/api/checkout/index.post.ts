import db from "~/utils/db";

export default defineEventHandler(async (event) => {
  const productIds = await readBody(event);

  if (!productIds || !productIds.length) {
    throw createError({
      statusCode: 400,
      statusMessage: "empty cart",
    });
  }

  const products = await db.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const order = await db.order.create({
    data: {
      isPaid: false,
      orderItems: {
        create: productIds.map((id: string) => ({
          product: {
            connect: {
              id: id,
            },
          },
        })),
      },
    },
  });

  return order;
});
