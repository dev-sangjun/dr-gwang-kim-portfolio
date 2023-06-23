import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import About from "./components/About";
import Samples from "./components/Samples";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Biography from "./components/Biography";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-base-200" data-theme="dark">
        <Navbar />
        <div className="flex flex-col mx-auto max-w-5xl gap-4 p-4 pt-20">
          <Outlet />
        </div>
        <Footer />
        <Toaster />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <About />
            <Education />
            <Samples />
            <Contact />
          </>
        ),
      },
      {
        path: "/bio",
        element: <Biography />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
