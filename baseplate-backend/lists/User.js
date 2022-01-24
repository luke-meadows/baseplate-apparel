const { Text, Password } = require('@keystonejs/fields');

const User = {
  fields: {
    name: { type: Text, isRequired: true, isUnique: false },
    email: { type: Text, isRequired: true, isUnique: true },
    password: { type: Password, isRequired: true },
  },
  labelField: 'name',
};

module.exports = User;
