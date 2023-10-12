import Alert from "@/components/alert";
import Footer from "@/components/footernew";
import HomeCareCarousal from "@/components/homecare/carousalGallery";
import HomecareGallery from "@/components/homecare/homecareGallery";
import Navbar from "@/components/shared/Navbar";


export default function Home(){
    return(
    <>
    <Navbar/>
    <Alert/>
    <HomeCareCarousal/>
    <HomecareGallery/>
    <Footer/>
    
    </>
    )
}