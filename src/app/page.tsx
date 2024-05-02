'use client'

import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import TopSection from "@/components/TopSection/TopSection";
import BottomSection from "@/components/BottomSection/BottomSection";

const Home = () => (
    <>
      <Menu />
      <Header />
      
      <main className="main">
        <TopSection />
        <BottomSection />
      </main>
    </>
  );

  export default Home;
