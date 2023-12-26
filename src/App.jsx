import "./assets/scss/App.scss";
import AddInfosBar from "./components/layouts/AddInfosBar.jsx";
import MainItemsBar from "./components/layouts/MainItemsBar.jsx";
import NavigationsBar from "./components/layouts/NavigationsBar.jsx";

function App() {

  return (
    <div style={{ display: "flex" }}>
      <NavigationsBar />
      <MainItemsBar />
      <AddInfosBar />
    </div>
  )
}

export default App
