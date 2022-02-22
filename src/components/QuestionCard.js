import { Card , Button } from "react-bootstrap";

function QuestionCard(props) {
  return (
    <Card className="text-center">
      <Card.Header>Question</Card.Header>
      <Card.Body>
        <Card.Title text='dark'>{props.firstOption.string}</Card.Title>
        <Card.Title>{props.secondOption.string}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
export default QuestionCard;
