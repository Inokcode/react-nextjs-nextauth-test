export const getStaticProps = async () => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const jsonPost = await post.json();
  return {
    props: {
      post: jsonPost || null,
    },
  };
};

const Postnft = ({ post }) => {
  return (
    <div>
      <div> Postnft</div>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
};
export default Postnft;
