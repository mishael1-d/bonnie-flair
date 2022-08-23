const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

const Product = require("../models/Product");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    price: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Root",
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
    prdoucts: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },
  },
});

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProject: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const product = new Product({
          name: args.name,
          category: args.category,
          price: args.price,
          image: args.image,
        });
        return product.save();
      },
    },
    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Product.findByIdAndRemove(args.id);
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Product.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              category: args.category,
              price: args.price,
              image: args.image,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});
