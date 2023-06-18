import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import PlayDetailsPage from "../pages/PlayDetailsPage"
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box pt="32px">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plays/:id" element={<PlayDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Box>
  );
}

export default App;