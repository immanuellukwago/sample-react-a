import List from "../list/List";
import "./Header.css";

function Header() {
   return (
      <header>
         <h1>ImmanuelCode</h1>
         <nav className="navigation">
            <ul>
               <li>
                  <List name={"/src/assets/home.png"} massage={"Home"} />
               </li>
               <li>
                  <List
                     name={"/src/assets/about.png"}
                     massage={"About & Social"}
                  />
               </li>
               <li>
                  <List
                     name={"/src/assets/language.png"}
                     massage={"Languages & Frameworks"}
                  />
               </li>
               <li>
                  <List name={"/src/assets/project.png"} massage={"Projects"} />
               </li>
            </ul>
         </nav>
         <hr />
      </header>
   );
}

export default Header;
