import { useRoutes } from "react-router-dom";
import { Countries } from "../appPages/Countries";
import { CountryPage } from "../appPages/CountryPage";


export const MainRoute = () => {
    return useRoutes([
        {path:'/', element: <Countries/>},
        {path:'/country/:name', element: <CountryPage/>},
        {path:'/code/:code', element: <CountryPage/>}
    ])
}