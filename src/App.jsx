import GlobalStyles from "@mui/material/GlobalStyles";
import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </>
  );
}

export default App;
