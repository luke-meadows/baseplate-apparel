const { Text } = require('@keystonejs/fields');

const Email = {
  fields: {
    email: { type: Text, isUnique: true },
  },
  labelField: 'Email',
};

module.exports = Email;
