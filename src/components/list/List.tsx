import "./List.css";

interface Props {
   name: string;
   massage: string;
}

function List({ name, massage }: Props) {
   return (
      <a href="#" className="main">
         <img className="image" src={name} alt="" />
         <p className="massage">{massage}</p>
      </a>
   );
}

export default List;
