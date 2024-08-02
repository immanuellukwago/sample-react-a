import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
   url: string;
   title: string;
   text: string;
   action?: string;
}

function Cards({ url, title, text, action = "View more!" }: Props) {
   return (
      <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={url} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">{action}</Button>
         </Card.Body>
      </Card>
   );
}

export default Cards;
