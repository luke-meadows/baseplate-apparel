import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, text } from '@keystone-next/fields';
export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ['item', 'quantity', 'size', 'user'],
    },
  },
  fields: {
    quantity: integer(),
    size: text(),
    user: relationship({ ref: 'User.cartItem' }),
    item: relationship({
      ref: 'Product',
    }),
  },
});
