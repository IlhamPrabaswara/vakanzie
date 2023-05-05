import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen px-4 pb-5 mx-auto md:max-w-[1128px]">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
