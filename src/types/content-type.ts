import { GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';

export const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        postId: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        parentId: { type: GraphQLID },
        userId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        createdAt: { type: new GraphQLNonNull(GraphQLDateTime) },
        isDeleted: { type: GraphQLBoolean }
    })
});