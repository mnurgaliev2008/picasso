import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader";

function App() {
  return (
    <div className="app" id="app">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
