import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQPage } from './pages/FAQPage';
import { Contact } from './pages/Contact';
import { Winners } from './pages/Winners';
import { GameRules } from './pages/GameRules';
import { AboutUs } from './pages/AboutUs';
import { HowToPlay } from './pages/HowToPlay';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/game-rules" element={<GameRules />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
