import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen px-5 pb-5">
      {children}
      <Footer />
    </div>
  );
}
