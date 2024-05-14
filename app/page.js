import Image from "next/image";
import Home from "@/app/components/Home";
import './app.css'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function HomeComponent() {
  return (
    <div>
        <Header/>
      <Home />
    <Footer/>
    </div>
  );
}
