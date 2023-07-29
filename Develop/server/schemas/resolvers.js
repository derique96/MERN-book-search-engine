const { User, Book} = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await Book.find({}).populate('user');
        },
        books: async () => {
            return await Book.populate('book')
        }
    }
};

module.exports = resolvers;