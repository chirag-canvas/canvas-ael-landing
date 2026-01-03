import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FormModal from './components/FormModal';
import ScrollToTop from './components/ScrollToTop';
import { FormModalProvider } from './contexts/FormModalContext';
import LandingPage from './Pages/LandingPage/LandingPage';
import MonetizePage from './Pages/MonetizePage/MonetizePage';
import EngagePage from './Pages/EngagePage/EngagePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import PublisherPage from './Pages/PublisherPage/PublisherPage';
import DSPPage from './Pages/DSPPage/DSPPage';
import TVPPage from './Pages/TVP/TVPPage';
import EnterprisePage from './Pages/Enterprise/EnterprisePage';
import InfraPage from './Pages/Infra/InfraPage';
import MonetizeVideoPlayer from './Pages/VideoPlayer/MonetizeVideoPlayer';
import EngageVideoPlayer from './Pages/VideoPlayer/EngageVideoPlayer';
import './App.css';

function App() {
    return (
        <FormModalProvider>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/monetize" element={<MonetizePage />} />
                    <Route path="/engage" element={<EngagePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/publisher" element={<PublisherPage />} />
                    <Route path="/dsp" element={<DSPPage />} />
                    <Route path="/oem" element={<TVPPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    <Route path="/infra" element={<InfraPage />} />
                    <Route path="/monetize/video" element={<MonetizeVideoPlayer />} />
                    <Route path="/engage/video" element={<EngageVideoPlayer />} />
                </Routes>
                <Footer />
                <FormModal />
            </Router>
        </FormModalProvider>
    );
}

export default App
