import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";

const App = () => {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center">
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </div>
  );
};

export default App;
