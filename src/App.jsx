import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import History from "./pages/about/history/History";
import Corporate from "./pages/sustainability/corporate/Corporate";
import AntiCorruption from "./pages/sustainability/anti_corruption/AntiCorruption";
import CsrActivities from "./pages/sustainability/csr_activities/CsrActivities";
import ContactUs from "./pages/contact/contact_us/ContactUs";

function App() {

  const Layout = () => {
    return (
        <>
          <Navbar />
              <Outlet />
              <div className="mb-24"></div>
          <Footer /> 
        </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: ( 
      <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          // param /about/:id
          path: "/about",
          element: <History />,
        },
        {
          path: "/corporate",
          element: <Corporate />,
        },
        {
          path: "/anti",
          element: <AntiCorruption />,
        },
        {
          path: "/csr",
          element: <CsrActivities />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
    // new path
    // {
    //   path: "/",
    //   element: <Home />,
    // },
    // {
    //   path: "/about",
    //   element: <History />,
    // },
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
