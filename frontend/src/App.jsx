import Navbar from "/components/Navbar";
import GardenCanvas from "/components/Canvas";
import StatusBar from "/components/StatusBar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import AboutPage from "/pages/About";
import HomePage from "/pages/Home";
import GardenPage from "/pages/Garden";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200">
          <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/garden" element={<GardenPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <StatusBar />
      </div>
    </Router>
  );
}

export default App;
