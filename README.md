# GraphQL Quiz App
Quiz app that uses GraphQL to query and mutate data in the backend and Apollo Client to query relevant data in the frontend.

[Live Link](https://graphql-quiz-app.netlify.app/)

## Technologies

### Frontend
* **Languages**: HTML5, CSS3, JavaScript
* **Frameworks**: TypeScript, NextJS, Apollo Client
* **Clean Code**: Clear Variable Names, Reusable Logic (DRY), One Function One Action, Simple Code, Clean Folder Structure
* **Performance**: Single Page Application, Static Site Generation

### Backend
* **Frameworks**: GraphQL, Node(Express), MongoDB

## Features

### Technical Features

* Querying data with GraphQL that returns data from MongoDB.
* Mutations with GraphQL to add data into database.
* Fetching relevant data from graphql endpoint using queries with Apollo Client.
* Static Site Generation (SSG) with NextJS to massively boost performance and SEO.
* Quiz functionality developed with ES6 JavaScript and React Hooks.
* Clean CSS and JavaScript code.

## Code Snippets

### GraphQL

```javascript
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
```

### Apollo

```javascript
//query
const GET_QUESTIONS = gql`
  query getQuestions {
    questions {
      question
      answers
      correct
    }
  }
`;

// using query
export async function getStaticProps() {
  const { data } = await client.query({ query: GET_QUESTIONS });

  return {
    props: {
      questions: data.questions,
    },
  };
}
```
