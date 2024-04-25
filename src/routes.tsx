import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Pets } from "./pages/Pets/Pets";
import { PetDetails } from "./pages/PetDetails";
import { Shelter } from "./pages/Admin/Shelter";
import { PetList } from "./pages/Admin/PetList";
import { AutHOC } from "./components/common/AuthHOC/AuthHOC";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/pets',
        children: [
            {
                index: true,
                element: <Pets />
            },
            {
                path: '/pets/:id',
                element: <PetDetails />
            }
        ]
    },
    {
        path: '/admin',
        children: [
            {
                index: true,
                element: <Shelter/>
            },
            {
                path: '/admin/pets',
                element: <AutHOC/>,
                children: [
                    {
                        index: true,
                        element: <PetList/>
                    }
                ]
            }
        ]
    }

])

export default router