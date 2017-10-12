import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PostInput',
  fields: () => ({
    title: {type: new GraphQLNonNull(GraphQLString)},
    sub_title: {type: GraphQLString},
    content: {type: GraphQLString}
  })
});