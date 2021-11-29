const { Relationship, Select, Text } = require('@keystonejs/fields');

const Brand = {
  fields: {
    brand: { type: Text },
  },
  labelField: 'brand',
};

module.exports = Brand;
