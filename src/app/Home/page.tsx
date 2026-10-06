import About from "@/src/components/About us/About";
import Eventpage from "@/src/components/Event/Event";
import Header from "@/src/components/Header/Header";
import Hero from "@/src/components/Hero/Hero";
import Progress from "@/src/components/Progress/Progress";
import Involve from "@/src/components/Involve/InvolvePage"
import  Contact  from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";
// import Dashboard from "@/src/NationalDashBoard/Dashboard";
// import Signup from "@/src/components/Signup/Signup";

function Home(){
    return(
        <>
            <Header />
            <Hero/>
            <About/>
            <Progress/>
            <Eventpage/>
            <Involve/>
            {/* <Signup/> */}
            {/* <LoginPage/> */}
            <Contact/>
            <Footer/>
            {/* <Dashboard/> */}
            
        </>
    )
}
export default Home