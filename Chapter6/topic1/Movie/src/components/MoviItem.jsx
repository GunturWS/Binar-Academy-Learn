import { Card, Button, CardBody } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({ id, imageURL, overview, title }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <CardBody>
        <Card.Title>{title}</Card.Title>
      <Card.Text className="text-truncate"> {overview}</Card.Text>
      <Button variant="primary" as={Link} to={`/details/${id}`}>
        Detail Movie
      </Button>
      </CardBody>
      
    </Card>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
