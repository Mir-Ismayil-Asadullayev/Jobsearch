import './assets/scss/App.scss';
import MainItemsBar from './components/layouts/MainItemsBar.jsx';
import NavigationsBar from './components/layouts/NavigationsBar.jsx';

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <NavigationsBar />
      <MainItemsBar />
    </div>
  )
}

export default App
