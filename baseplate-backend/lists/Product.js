const { Integer, Relationship, Select, Text } = require('@keystonejs/fields');

const Product = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },

    description: {
      type: Text,
      ui: {
        displayMode: 'textarea',
      },
    },

    photo: {
      type: Relationship,
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    },
    brand: {
      type: Relationship,
      ref: 'Brand',
      ui: {
        inlineCreate: { fields: ['brand'] },
      },
    },

    productCategory: {
      type: Select,
      options: [
        { value: 'shoes', label: 'Shoes' },
        { value: 'accessory', label: 'Accessory' },
        { value: 'clothes', label: 'Clothes' },
      ],
      defaultValue: 'Shoes',
      ui: {
        displayMode: 'segmented-control',
      },
      labelField: 'productType',
    },

    productType: {
      type: Relationship,
      ref: 'ProductType',
      ui: {
        inlineCreate: { fields: ['productType'] },
      },
    },

    status: {
      type: Select,
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
      },
    },
    price: {
      type: Integer,
    },
  },
};

module.exports = Product;
