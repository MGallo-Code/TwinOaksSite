import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Project Component</h1>} />
          <Route path="/add-project" element={<h1>Add Project Component</h1>} />
          <Route path="/update-project" element={<h1>Update Project Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
