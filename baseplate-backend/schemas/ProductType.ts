import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';
export const ProductType = list({
  fields: {
    productType: text({ isRequired: true, isUnique: true }),
  },
});
