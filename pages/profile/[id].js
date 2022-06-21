export const getServerSideProps = async ({ query }) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}`
  );
  const userData = await user.json();
  return {
    props: {
      user: userData || null,
    },
  };
};

const Profile = ({ user }) => {
  if (!Object.keys(user).length) {
    return <div>Invalid User Id</div>;
  }
  return (
    <div>
      {/* <div>Profile - {user}</div> */}
      {/* <div>{JSON.stringify(user, 2)}</div> */}
      {user.name}
      {user.email}
    </div>
  );
};
export default Profile;
