import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text } from '@keystone-next/fields';
export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ['product', 'quantity', 'size', 'user'],
    },
  },
  fields: {
    quantity: integer(),
    size: text(),
    user: relationship({ ref: 'User.cartItem' }),
    product: relationship({
      ref: 'Product',
    }),
  },
});
