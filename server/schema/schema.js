const Questions = require("../model/Questions");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
} = require("graphql");

const QuestionType = new GraphQLObjectType({
  name: "question",
  fields: () => ({
    question: { type: GraphQLString },
    answers: { type: new GraphQLList(GraphQLString) },
    correct: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    questions: {
      type: new GraphQLList(QuestionType),
      resolve(parent, args) {
        return Questions.find();
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addQuestion: {
      type: QuestionType,
      args: {
        question: { type: GraphQLString },
        answers: { type: new GraphQLList(GraphQLString) },
        correct: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Questions.create({
          question: args.question,
          answers: args.answers,
          correct: args.correct,
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
