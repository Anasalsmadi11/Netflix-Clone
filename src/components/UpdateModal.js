import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
function UpdateModal(props){

 const handleSubmit= async(e)=>{
    e.preventDefault()
    const obj={
      title: e.target.name.value,
      posterpath: e.target.image.value,
      releasedate: e.target.releasedate.value,
      overview: e.target.overview.value
    }
    console.log(obj.title)
    console.log(obj.releasedate)
    const serverUrl=`${process.env.REACT_APP_SERVER_URL}movies/${props.updateMovies.id}`
    // console.log(serverUrl)
    const result= await axios.put(serverUrl, obj)
    console.log(result.data)
  props.takeUpdatedDataFromChild(result.data)
    props.handleClose()
 }
    return(
        <>
         <Modal show ={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Updare Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image rounded width="100%" />
       
        <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name" //this name didnt come with the form comp so i added it to target the label like we used to
            
            defaultValue={props.updateMovies.title}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>posterPath</Form.Label>
          <Form.Control
  
            type="text"
            name="image"
           
            defaultValue={props.updateMovies.posterpath}
          />
       
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Date</Form.Label>
          <Form.Control
  
            type="text"
            name="releasedate"
           
            defaultValue={props.updateMovies.releasedate}
          />
       
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>overview</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              name="overview"
              defaultValue={props.updateMovies.overview}
             
       
            />
           
          </InputGroup>
        </Form.Group>
       
      <Button type="submit">Submit form</Button>
    </Form>
       
        </Modal.Body>
    
        
      </Modal>
        </>
    )
}
export default UpdateModal;