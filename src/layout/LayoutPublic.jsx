import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>Cambio1</footer>
    </>
  );
};

export default LayoutPublic;
