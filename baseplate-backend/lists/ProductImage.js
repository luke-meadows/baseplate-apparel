const { Keystone } = require('@keystonejs/keystone');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const dotenv = require('dotenv').config();

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'baseplate',
});

const ProductImage = {
  fields: {
    image: { type: CloudinaryImage, adapter: fileAdapter },
  },
};

module.exports = ProductImage;
