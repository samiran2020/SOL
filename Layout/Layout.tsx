import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Layout = ({ children }:any) => {
    return (
        <div className="layout p-0 m-0 border-0 my-0 mx-auto">
            <Header/>
                <main className="p-0 m-0 border-0 my-0 mx-auto">{children}</main>
            <Footer/>
        </div>
);
};
export default Layout ;
