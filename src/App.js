
import { LandingSection } from "./components/LandingSection";
import { MLC } from "./components/MLC";
import { LOP } from "./components/LOP";
import { Flexibility } from "./components/Flexibility";
import { Property } from "./components/Property";
import { Comments } from "./components/Comments";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <LandingSection />
      <MLC />
      <LOP />
      <Flexibility />
      <Property />
      <Comments />
      <Footer />
    </>
  );
}

export default App;