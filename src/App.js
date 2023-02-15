
import 'normalize.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { PostPageId } from './pages/PostPageId.js';
import { ProfileUserPage } from './pages/ProfileUserPage.js';
import { SinglePage } from "./pages/SinglePage.js";
import { LoginPage } from './pages/LoginPage.js';
import { postOneLoader, postsLoader, userLoader } from "./loaders.js"





const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<SinglePage />} loader={postsLoader} />
    <Route path="/post/:id" element={<PostPageId />} loader={postOneLoader} />
    <Route path="/profile/:id" element={<ProfileUserPage />} loader={userLoader} />
    <Route path='/login' element={<LoginPage />} />
  </>
))


function App() {


  return (
    <RouterProvider router={router} />
  );
}




export default App;
