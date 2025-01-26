import Header from "../src/components/sections/Header";
import Navigation from "../src/components/sections/Navigation";
import Hero from "../src/components/sections/Hero";
import Main from "../src/components/sections/Main";
import Dashboard from "../src/components/sections/Dashboard";
import AppStatistics from "../src/components/sections/AppStatistics";
import Features from "../src/components/sections/Features";
import Pricing from "./components/sections/Pricing";
imipo;
import CTA from "../src/components/sections/CTA";
import Footer from "../src/components/sections/Footer";

function App() {
  return (
    <div className="w-full">
      <Header>
        <Navigation />
        <Hero />
      </Header>

      <Main>
        <Dashboard />
        <AppStatistics />
        <Features />
        <Pricing />
        <CTA />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
