
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';
import { supabase } from '../lib/supabase';
import { AuthContext } from '../types/auth-context';
import { CommentType } from '../types/content-type';

// Query: Get comments for a post
export const comments = {
    type: new GraphQLList(CommentType),
    args: {
        postId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_parent: any, args: { postId: any; }, context: AuthContext) => {
        if (!context.scopes.includes('comments:read')) {
            throw new Error('Unauthorized: missing comments:read scope');
        }

        const { tenantId } = context;
        await supabase.rpc('set_config', { key: 'app.tenantId', value: tenantId });

        const { data, error } = await supabase
            .schema('api')
            .from('comments')
            .select('*')
            .eq('postId', args.postId)
            .order('createdAt', { ascending: true });

        if (error) throw new Error(error.message);
        return data;
    }
};

// Mutation: Add comment
export const addComment = {
    type: CommentType,
    args: {
        postId: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        parentId: { type: GraphQLID }
    },
    resolve: async (_parent: any, args: { postId: any; content: any; name: any; parentId: any; }, context: AuthContext) => {
        if (!context.scopes.includes('comments:write')) {
            throw new Error('Unauthorized: missing comments:write scope');
        }

        const { user, tenantId } = context;
        await supabase.rpc('set_config', { key: 'app.tenantId', value: tenantId });

        const { data, error } = await supabase.schema('api').from('comments').insert({
            postId: args.postId,
            content: args.content,
            parentId: args.parentId || null,
            userId: user.id,
            name: args.name || null,
            tenantId: tenantId,
            createdAt: new Date().toISOString()
        }).select().single();

        if (error) throw new Error(error.message);
        return data;
    }
};

// Mutation: Soft delete comment
export const deleteComment = {
    type: GraphQLBoolean,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_parent: any, args: { id: any; }, context: AuthContext) => {
        if (!context.scopes.includes('comments:delete')) {
            throw new Error('Unauthorized: missing comments:delete scope');
        }

        const { user, tenantId } = context;
        await supabase.rpc('set_config', { key: 'app.tenantId', value: tenantId });

        const { error } = await supabase
            .schema('api')
            .from('comments')
            .update({ isDeleted: true })
            .match({ id: args.id, userId: user.id });

        if (error) throw new Error(error.message);
        return true;
    }
};