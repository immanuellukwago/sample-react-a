import "./Card.css";

function Card() {
   return (
      <a href="#" className="card">
         <img className="image" src="/src/assets/profile.jpg" alt="" />
         <h2 className="title">Project Title</h2>
         <p>Description of the project</p>
      </a>
   );
}

export default Card;
