import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main/Main";
import Events from "./Pages/Events/Events";
import Merch from "./Pages/Merch/Merch";
import Newsletter from "./Pages/Newsletter/Newsletter";
import PoetsMidnight from "./Pages/PoetsMidnight/PoetsMidnight";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[{
        path:'/',
        element: <Events></Events>
      },
    {
      path:'/merch',
      element:<Merch></Merch>
    },
    {
      path:'/newsletter',
      element:<Newsletter></Newsletter>
    },
    {
      path:'/poetsmidnight',
      element:<PoetsMidnight></PoetsMidnight>
    }
    ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
