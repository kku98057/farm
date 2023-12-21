import { Outlet, useLocation, useSearchParams } from "react-router-dom";

import { ChildrenType } from "./types";

function App() {
  return (
    <ProtectRouters>
      <div className="wrap">
        <Outlet />
      </div>
    </ProtectRouters>
  );
}

export default App;
const ProtectRouters = ({ children }: { children: ChildrenType }) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);

  if (searchParams.get("token")) {
    return <div>{children}</div>;
  } else {
    alert("접근권한이 없습니다.");
    window.location.href = "https://naver.com";
    return null;
  }
};
