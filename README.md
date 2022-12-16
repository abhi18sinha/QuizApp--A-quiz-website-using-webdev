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
## Snapshots

### Front Page
<img width="1437" alt="Screenshot 2022-12-17 at 3 27 40 AM" src="https://user-images.githubusercontent.com/55578512/208196182-2e768948-6285-4a53-827f-f5e2eff83952.png">

### If wrong answer is chosen
<img width="1440" alt="Screenshot 2022-12-17 at 3 28 53 AM" src="https://user-images.githubusercontent.com/55578512/208196273-8fcee48e-0979-4ec0-ba68-9e190330cf83.png">

### Fail
<img width="1440" alt="Screenshot 2022-12-17 at 3 29 37 AM" src="https://user-images.githubusercontent.com/55578512/208196342-13e24cbe-ae87-4553-bcbc-67e68d1454a1.png">

### Pass
<img width="1440" alt="Screenshot 2022-12-17 at 3 30 09 AM" src="https://user-images.githubusercontent.com/55578512/208196379-a0160f4f-a6fb-4bec-9fd1-3dbb40a92f53.png">
