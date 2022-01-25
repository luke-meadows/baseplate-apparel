import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';
export const Brand = list({
  fields: {
    brand: text({ isRequired: true, isUnique: true }),
  },
  ui: {
    labelField: 'brand',
  },
});
