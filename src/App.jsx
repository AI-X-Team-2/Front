import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';

function App() {
  return (
    <div>
   

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
