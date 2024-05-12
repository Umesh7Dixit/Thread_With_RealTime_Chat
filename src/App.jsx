import { Container } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from './pages/PostPage';
import Header from './components/Header';

function App() {
  
// "/:username" is dynamic route

  return (
    <Container  width={"650px"} >
        <Header/>
      <Routes>
        <Route path="/:username" element={<UserPage/>}/>
        <Route path="/:username/post/:pid" element={<PostPage/>}/>
      </Routes>

    </Container>
  );
}

export default App
