import React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from "next/link";

type CoderProps = {
  coderList: any[];
};

export const getStaticProps: GetStaticProps<CoderProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const coderList = await res.json();
  return {
    props: {
      coderList: coderList.map((x: any) => ({ id: x.id, name: x.name })),
    },
  };
};
const CodersList = ({ coderList }: CoderProps) => {
  console.log(coderList);
  return (
    <div className="container px-[150px]">
      <h1 className="mb-5 text-4xl font-bold">All coder</h1>
      {coderList.map((coder) => (
        <Link key={coder.id} href={`/coders/${coder.id}`}>
          <div className="p-3 mb-4 text-xl font-semibold text-gray-700 transition-all bg-white rounded-lg cursor-pointer hover:bg-gray-300">
            {coder.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CodersList;
