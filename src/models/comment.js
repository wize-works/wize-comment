/**
 * @typedef {Object} GraphQLModel
 * @property {string} name
 * @property {Object} fields
 */

/**
 * @type {GraphQLModel}
 */
const CommentModel = {
    name: 'Comment',
    fields: {
        id: { type: 'uuid', required: true, defaultValue: 'uuid()' },
        postId: { type: 'string', required: true },
        parentId: { type: 'uuid', required: false },
        content: { type: 'string', required: true },
        name: { type: 'string', required: false },
        userId: { type: 'uuid', required: true, defaultValue: 'uuid()' },
        createdAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        updatedAt: { type: 'datetime', required: true, defaultValue: 'now()' },
        createdBy: { type: 'string', required: false },
        updatedBy: { type: 'string', required: false },
    }
};

export default CommentModel;