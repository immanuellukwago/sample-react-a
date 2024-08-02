import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import Intro from "./components/body/Intro";

function App() {
   return (
      <div className="container">
         <Header />
         <Intro />
         <div className="div-cards">
            <Card
               url={"/src/assets/profile.jpg"}
               title={"Project title!"}
               text={"description"}
            />
            <Card
               url={"/src/assets/profile.jpg"}
               title={"Project title!"}
               text={"description"}
            />
            <Card
               url={"/src/assets/profile.jpg"}
               title={"Project title!"}
               text={"description"}
            />
         </div>
         <Footer />
      </div>
   );
}

export default App;
