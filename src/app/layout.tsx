import "./globals.css";
import PreHeader from "./components/PreHeader";
import Footer from "./components/Footer";
import Banner from "./components/Header";
import PostFooter from "./components/PostFooter";
import Contact from "./components/Contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PreHeader message="" created_at={new Date()} />
      {children}
      <Contact email="example@example.com" phone="123-456-7890" />
      <Footer />
      <PostFooter />
    </>
  );
}
