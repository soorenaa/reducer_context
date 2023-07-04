import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Outlet } from "react-router-dom";
// import Header from "../page/Header";

const MainLayout = ({ children }) => {
    return (
        <>
            <HelmetProvider >
                <div>
                    {children}
                </div>
            </HelmetProvider>
        </>
    );
};

export default MainLayout;