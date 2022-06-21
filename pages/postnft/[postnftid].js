import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          postnftid: "5",
        },
      },
      {
        params: {
          postnftid: "10",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postnftid}`
  );
  const jsonPost = await post.json();
  return {
    props: {
      post: jsonPost || null,
    },
    revalidate: 3,
  };
};

const PostnftDetails = ({ post }) => {
  const router = useRouter();
  const { postnftid } = router.query;
  console.log({ router });
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>PostnftDetails - {postnftid}</div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};
export default PostnftDetails;
