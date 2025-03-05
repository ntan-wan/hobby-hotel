import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router";
import { RootLayout } from "@/layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
