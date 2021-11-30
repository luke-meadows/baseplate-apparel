const { Text } = require('@keystonejs/fields');

const ProductType = {
  fields: {
    productType: {
      type: Text,
      isRequired: true,
    },
  },
  labelField: 'productType',
};

module.exports = ProductType;
