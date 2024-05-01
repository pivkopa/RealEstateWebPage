'use client'

import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import TopSection from "@/components/TopSection/TopSection";
import BottomSection from "@/components/BottomSection/BottomSection";



export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main className="main">
        <TopSection />
        <BottomSection />
      </main>
    </>
  );
}
