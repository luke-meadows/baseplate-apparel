import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';
export default async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('adding to cart');
  // 1. query current user & see if they are signed in
  const sesh = context.session as Session;
  console.log(sesh);

  if (!sesh.itemId) {
    throw new Error('you must be logged in to do this');
  }
  // 2. Query the current users cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: {
      user: { id: sesh.itemId },
      product: { id: productId },
    },
    resolveFields: 'id, quantity, size',
  });
  const [existingCartItem] = allCartItems;

  // 3. See if the item is already in there

  if (existingCartItem) {
    console.log(
      `Item exists, increment by one. ${existingCartItem.quantity} already exist`
    );
    // 4. if it is increment by one
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // 5. if it isn't create new item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}
