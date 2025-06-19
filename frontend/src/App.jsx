import Navbar from "/components/Navbar";
import GardenCanvas from "/components/Canvas";
import StatusBar from "../components/StatusBar";

function App() {
  return (
    <div className="min-h-screen bg-base-200">
        <Navbar />
      <main className="p-4">
        <GardenCanvas />
      </main>
      <StatusBar />
    </div>
  );
}

export default App;
