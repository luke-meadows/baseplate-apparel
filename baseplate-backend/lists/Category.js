const { Select } = require('@keystonejs/fields');

const options = [
  { value: 'shoes', label: 'Shoes' },
  { value: 'accessory', label: 'Accessory' },
  { value: 'clothes', label: 'Clothes' },
];

const Category = {
  fields: {
    productType: { type: Select, options },
  },
  labelField: 'brand',
};

module.exports = Category;
