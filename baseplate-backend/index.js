const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'baseplate-backend';
const dotenv = require('dotenv').config();
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};
// Product Schema
const ProductList = require('./lists/Product');
// ProductImage Schema
const ProductImageList = require('./lists/ProductImage');
// ProductImage Schema
const BrandList = require('./lists/Brand');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('Product', ProductList);
keystone.createList('ProductImage', ProductImageList);
keystone.createList('Brand', BrandList);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
