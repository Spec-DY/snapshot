import NaviBar from "./components/NaviBar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SnapShot from "./pages/SnapShot";

const PageLayout = ({ children }) => {
  return <div className="mt-24 items-center flex flex-col">{children}</div>;
};

function App() {
  return (
    <BrowserRouter basename="/data">
      {/* uncomment below line when there will be more tabs than snapshot */}
      {/* <NaviBar /> */}

      <PageLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/snapshot" replace />} />
          <Route path="/snapshot" element={<SnapShot />} />
          <Route path="/snapshot/:province/:category" element={<SnapShot />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
