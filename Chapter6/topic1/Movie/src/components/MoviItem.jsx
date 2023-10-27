import { Card, Button, CardBody } from "react-bootstrap";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({ id, title, overview, imageURL }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-truncate">{overview}</Card.Text>
        <Button as={Link} variant="primary" to={`/details/${id}`}>
          Details Movie
        </Button>
      </Card.Body>
    </Card>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
