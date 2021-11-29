const { Text } = require('@keystonejs/fields');

const ProductType = {
  fields: {
    category: { type: { Text } },
  },
  labelField: 'category',
};

module.exports = ProductType;
