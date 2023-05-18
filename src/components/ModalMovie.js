import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ModalMovie(props){
    // console.log(props.movieItem) it wont work so go to the parent and console the monvieItem property there

    
    return(
        <>
        <Modal show ={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={`https://image.tmdb.org/t/p/w500${props.movieItem.posterPath}`} rounded width="100%" />
        <p>{props.movieItem.releaseDate}</p> {/*try console the movieItem to know how we did the naming */}
        <p>{props.movieItem.overview}</p>
        </Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add comment</Form.Label>
        <Form.Control type="text" placeholder="add comment" />
      </Form.Group>
      </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}  >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ModalMovie;