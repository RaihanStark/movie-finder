import GlobalStyles from "@mui/material/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar/Navbar";
import ScreensDetail from "./screens/Detail/Detail";
import ScreensDashboard from "./screens/Dashboard/Dashboard";
function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: "Roboto, sans-serif",
            margin: 0,
            padding: 0,
          },
        }}
      />

      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<ScreensDashboard />} />
          <Route path="detail/:imdbID" element={<ScreensDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
