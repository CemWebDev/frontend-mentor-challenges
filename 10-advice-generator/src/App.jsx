import Attribution from "./components/Attribution";
import Box from "./components/Box";

const App = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-neutral-darkBlue relative">
      <Box />
      <Attribution className="absolute bottom-[10%] text-sm text-white font-manrope tracking-wide text-center" />
    </div>
  );
};

export default App;
