import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
import axios from 'axios'

function Movie(props){
    const[show,setShow]=useState(false)
    const[movieItem, setMovieItem]=useState({})
    const handleShow=(item)=>{
        setShow(true)
        setMovieItem(item)
    }
    const handleClose=()=>{
        setShow(false)
    }
  console.log(movieItem) //the result wont appear except if you click on the modal

  const addToFav=async (item)=>{
    const serverUrl= `${process.env.REACT_APP_SERVER_URL}` //the movies is a route in the server to add to database
    const obj={
      title: item.title,
      posterpath:`https://image.tmdb.org/t/p/w500${item.posterPath}`,
      overview: item.overview,
      releasedate : item.releaseDate
    }
    const result= await axios.post(`${serverUrl}movies`,obj)
    console.log(result.data)
  }

    return(
        <>

<Row xs={1} md={4} className="g-4">
      {props.movieData.map((item,i) => (
        <Col key={i}>
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${item.posterPath}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
               <p style={{overflow:"hidden"}}>{item.overview}</p>
               <p>{item.releaseDate}</p>
              </Card.Text>
              <Button  onClick={()=>{handleShow(item)}} variant="primary">show modal</Button>
              <Button  onClick={()=>{addToFav(item)}} variant="success">add to fav</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <ModalMovie showFlag={show} handleClose={handleClose} movieItem={movieItem}/>
        </>
    )
}

export default Movie;