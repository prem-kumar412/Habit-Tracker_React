/* ------------ IMPORT COMPONENTS ------------ */
import Navbar from "./Components/Navbar/navbar";
import Daily from "./Pages/DailyView/dailyView";
import Weekly from "./Pages/WeeklyView/weeklyView";
/* ------------ IMPORT ROUTER ------------ */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



function App() {

  const router = createBrowserRouter([
     {path : '/' , element : <Navbar /> , 
      children : [
        {path : '/' , element : <Daily />},
        {path: '/weekly', element: <Weekly />}
      ]}
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
