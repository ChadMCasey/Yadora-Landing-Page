// sections
import Page from "../src/components/sections/Page";
import Header from "../src/components/sections/Header";
import Navigation from "../src/components/sections/Navigation";
import Hero from "../src/components/sections/Hero";
import Main from "../src/components/sections/Main";
import Dashboard from "../src/components/sections/Dashboard";
import AppStatistics from "../src/components/sections/AppStatistics";
import Features from "../src/components/sections/Features";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import CTA from "../src/components/sections/CTA";
import Footer from "../src/components/sections/Footer";

// UI
import Modal from "./components/UI/Modal";
import MoreInformation from "./components/UI/MoreInformation";

import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Dashboard />
          <AppStatistics />
          <Features />
          <Pricing />
          <Testimonials />
          <CTA />
        </Main>

        <Footer />

        <Modal modalName="more-information">
          <MoreInformation />
        </Modal>
      </Page>
    </ModalContextProvider>
  );
}

export default App;
