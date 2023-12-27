import app from "./assets/scss/App.module.scss";
import AddInfosBar from "./components/layouts/AddInfosBar.jsx";
import MainItemsBar from "./components/layouts/MainItemsBar.jsx";
import NavigationsBar from "./components/layouts/NavigationsBar.jsx";

function App() {

  return (
    <div className={app.container}>
      <NavigationsBar />
      <MainItemsBar />
      <AddInfosBar />
    </div>
  )
}

export default App
