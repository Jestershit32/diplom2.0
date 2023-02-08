
import 'normalize.css';
import { Route, Routes } from "react-router-dom";
import { PostPageId } from './pages/PostPageId.js';
import { SinglePage } from "./pages/SinglePage.js";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/page/:id" element={<PostPageId />} />
      </Routes>
    </>
  );
}




export default App;
