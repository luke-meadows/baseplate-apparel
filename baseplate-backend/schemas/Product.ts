import {
  integer,
  relationship,
  select,
  text,
  checkbox,
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),

    color: text(),

    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),

    brand: relationship({
      ref: 'Brand',
      ui: {
        displayMode: 'select',
      },
    }),

    productCategory: select({
      options: [
        { value: 'shoes', label: 'Shoes' },
        { value: 'accessory', label: 'Accessory' },
        { value: 'clothes', label: 'Clothes' },
      ],
      defaultValue: 'Shoes',
      ui: {
        displayMode: 'segmented-control',
      },
    }),

    productType: relationship({
      ref: 'ProductType',
      ui: {
        displayMode: 'select',
      },
    }),

    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
      },
    }),

    price: integer(),
    sizes: text(),
    recommended: checkbox(),
    latest: checkbox(),
  },
});
