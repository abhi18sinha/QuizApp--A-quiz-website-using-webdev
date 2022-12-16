import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App With GraphQL and Apollo</title>
        <meta
          name="description"
          content="Quiz App Built With GraphQL and Apollo Client"
        />
      </Head>
      <section className="intro">
        <div className="container">
          <h1>JavaScript Quiz</h1>
          <Link className="btn btn__accent" href="/quiz">
            Start Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
