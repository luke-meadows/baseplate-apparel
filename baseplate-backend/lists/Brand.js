const { Relationship, Select, Text } = require('@keystonejs/fields');

// Create a function to fetch the options for brand select in product

// it will fetch all of the different brands created with the Brands List

// the Brand instance will be a relationship (one way probably on product as a select field)

const Brand = {
  fields: {
    brand: { type: Text },
    // product: {
    //   type: Relationship,
    //   ref: 'Product.brand',
    // },
  },
  labelField: 'brand',
};

module.exports = Brand;
