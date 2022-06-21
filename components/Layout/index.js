import Head from "next/head";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head></Head>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
