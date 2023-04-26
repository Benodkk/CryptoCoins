import MainSite from "./pages/MainSite";

const style: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

function App() {
  return (
    <div style={style}>
      <MainSite />
    </div>
  );
}

export default App;
