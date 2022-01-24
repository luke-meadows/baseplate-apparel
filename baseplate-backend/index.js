const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'baseplate-backend';
const dotenv = require('dotenv').config();
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
// Schemas
const ProductList = require('./lists/Product');
const ProductImageList = require('./lists/ProductImage');
const BrandList = require('./lists/Brand');
const ProductTypeList = require('./lists/ProductType');
const EmailList = require('./lists/Email');
const UserList = require('./lists/User');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
});

keystone.createList('Product', ProductList);
keystone.createList('ProductImage', ProductImageList);
keystone.createList('Brand', BrandList);
keystone.createList('ProductType', ProductTypeList);
keystone.createList('Email', EmailList);
keystone.createList('User', UserList);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
