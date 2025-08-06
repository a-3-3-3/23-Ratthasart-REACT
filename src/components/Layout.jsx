import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <nav className="border-b py-4 px-8">
        <ul className="flex gap-4 justify-end">
          <li className="font-bold">
            <Link to="" className="hover:text-red-500 text-2xl">
              Home
            </Link>
          </li>
          <li className="font-bold">
            <Link to="/owner" className="hover:text-red-500 text-2xl">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
