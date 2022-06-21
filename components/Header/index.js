import Link from "next/link";
const Header = () => {
  return (
    <div>
      <Link href={`/profile`}>
        <a>profile</a>
      </Link>
      <Link href={`/`}>
        <a>Home</a>
      </Link>
      <Link href={`/login`}>
        <a>login</a>
      </Link>
      <Link href={`/signup`}>
        <a>signup</a>
      </Link>
      <style>{`
      a{
        co
      }`}</style>
    </div>
  );
};
export default Header;
