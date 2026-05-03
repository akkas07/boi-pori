import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-96 flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl text-gray-600 font-semibold text-center px-4">
          Welcome To Boi Pori
        </h1>
      </div>
    </>
  );
}

export default App;
