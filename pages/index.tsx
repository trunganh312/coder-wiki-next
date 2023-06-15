import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="p-10">
      <Head>
        <title>Coder wikipedia | Home </title>
        <meta content="Coder wikipedia" name="description" />
      </Head>
      <h1 className="mb-5 text-4xl font-bold">Home</h1>
      <p className="leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>

      <div className="flex justify-center mt-5">
        <button
          className="p-4 text-white bg-blue-500 rounded-lg"
          onClick={() => router.push("/coders")}
        >
          See all coders
        </button>
      </div>
    </div>
  );
}
