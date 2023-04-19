const { setContextValue } = require('../../services/contextHelper');

module.exports = (request, response, delegate, next) => {
  // The graphql API supposed to be public
  // We will remove user from the contex, if you want to use the user in the graphql API, you need to use the admin graphql API
  setContextValue(request, 'user', null);
  next();
};
