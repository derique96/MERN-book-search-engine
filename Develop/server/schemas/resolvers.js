const { User} = require('../models');
const { signToken } = require('../utils/auth.js');
const resolvers = {
    Query: {
        me: async (parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({_id:context.user._id}).select('-__v -password')
                return userData;
            }

        },
    },
    Mutation: {
        addUser: async(parent,args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user}
        },
        logIn: async(parent, {email, password}) => {
            const user = await User.findOne({email});
            if (!user) {
                console.log('user not found');
            }
            const correctPassword = await user.
            isCorrectPassword(password) 
            const token = signToken(user);
            return {token, user}
        },
    },
    
};

module.exports = resolvers;