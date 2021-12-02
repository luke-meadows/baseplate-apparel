const { Text } = require('@keystonejs/fields');

const ProductType = {
  fields: {
    productType: {
      type: Text,
      isRequired: true,
      isUnique: true,
    },
  },
  labelField: 'productType',
};

module.exports = ProductType;
