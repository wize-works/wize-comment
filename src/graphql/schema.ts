import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { comments, addComment, deleteComment } from './comments';

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        comments
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addComment,
        deleteComment
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
