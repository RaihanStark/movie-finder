import GlobalStyles from "@mui/material/GlobalStyles";
import { Routes, Route } from "react-router-dom";

import ScreensDetail from "./screens/Detail/Detail";
import ScreensDashboard from "./screens/Dashboard/Dashboard";
function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: "Roboto, sans-serif",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<ScreensDashboard />} />
        <Route path="detail/:imdbID" element={<ScreensDetail />} />
      </Routes>
    </>
  );
}

export default App;
