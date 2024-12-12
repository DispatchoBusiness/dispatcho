import Image from "next/image";
import Contact from "./components/Contact";
import PreBanner from "./components/PreBanner";
import Banner from "./components/Banner";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";

export default function Home() {
  const currentDate = new Date();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <PreBanner message="Empty Message" created_at={currentDate} />
        <Banner />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Contact email="example@example.com" phone="123-456-7890" />
        <div>
          <h2>About</h2>
          <div>description</div>
          <button>text</button>
          <img src={'test'} alt={''} />
        </div>
        <div>
          <Testimonial image_link="test" message="test" created_at={currentDate} />
        </div>
        <div>
          <NewsLetter />
        </div>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Contact email="example@example.com" phone="123-456-7890" />
      </div>
      <div>
        <Footer />
        <SubFooter />
      </div>
    </div>
  );
}
