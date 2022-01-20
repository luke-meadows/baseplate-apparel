const { Email } = require('@keystonejs/fields');

const Email = {
  fields: {
    brand: { type: Email, isUnique: true },
  },
  labelField: 'Email',
};

module.exports = Email;
