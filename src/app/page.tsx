import Image from "next/image";
import Contact from "./components/Contact";
import PreBanner from "./components/PreBanner";

export default function Home() {
  const currentDate = new Date();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PreBanner message="Empty Message" created_at={currentDate} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Contact email="example@example.com" phone="123-456-7890" />
      </footer>
    </div>
  );
}
