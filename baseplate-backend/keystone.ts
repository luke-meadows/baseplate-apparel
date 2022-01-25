import 'dotenv/config';
const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/baseplate';
// Session variables used for authenticating users in the frontend.
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // how long does user stay signed in
  secret: process.env.COOKIE_SECRET, // when generating a cookie we need a secret
};
// Methods from keystone
import { config, createSchema } from '@keystone-next/keystone/schema';
// import { createAuth } from '@keystone-next/auth';

// Lists
import { User } from './schemas/User';
// import { Product } from './schemas/Product';
// import { ProductImage } from './schemas/ProductImage';
// Session methods
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

// const { withAuth } = createAuth({
//   listKey: 'User', // listKey is the field we want to use for our auth
//   identityField: 'email',
//   secretField: 'password',
//   initFirstItem: {
//     fields: ['name', 'email', 'password'],
//     // TODO add in initial roles here
//   },
// });

// export default withAuth(
export default config(
  {
    server: {
      cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true,
      },
    },

    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },

    lists: createSchema({
      // Schema items go in here.
      User,
      //   Product,
      //   ProductImage,
    }),

    ui: {
      // show the ui for only people who pass this test - check if they have a session and are logged in
      isAccessAllowed: () => true,
      //   ({ session }) => {
      //     console.log(session);
      //     return !!session?.data;
      //   },
    },
    //  add session values
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: 'id name email',
    }),
  }
  // )
);
