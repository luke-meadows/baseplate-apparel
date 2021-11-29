const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'baseplate-backend';
const dotenv = require('dotenv').config();
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};
// Schemas
const ProductList = require('./lists/Product');
const ProductImageList = require('./lists/ProductImage');
const BrandList = require('./lists/Brand');
const CategoryList = require('./lists/Category');
const TypeList = require('./lists/ProductType');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('Product', ProductList);
keystone.createList('ProductImage', ProductImageList);
keystone.createList('Brand', BrandList);
keystone.createList('Category', CategoryList);
keystone.createList('Type', TypeList);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
