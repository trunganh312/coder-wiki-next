import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
type CoderItemProps = {
  coderItem: any;
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((coder: any): any => {
    return {
      params: { userId: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const userId = context.params.userId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await res.json();
  return {
    props: {
      coderItem: data,
    },
  };
};

const CoderDetail = ({ coderItem }: CoderItemProps) => {
  return (
    <div className="container flex flex-col gap-2 ">
      <h1 className="text-4xl font-bold">{coderItem.name}</h1>
      <p>Email: {coderItem.email}</p>
      <p>Website: {coderItem.website}</p>
      <p>Address: {coderItem.address.street}</p>
      <p>Company: {coderItem.company.name}</p>
    </div>
  );
};

export default CoderDetail;
