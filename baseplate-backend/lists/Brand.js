const { Text } = require('@keystonejs/fields');

const Brand = {
  fields: {
    brand: { type: Text, isRequired: true },
  },
  labelField: 'brand',
};

module.exports = Brand;
