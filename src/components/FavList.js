import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import UpdateModal from "./UpdateModal";

function FavList(){
const[favMovies, setFavMovies]=useState([]) //this to get the result.data from inside the function
const[showUpdate, setShowUpdate]=useState(false)
const [clickedMovie, setClickedMovie]=useState({})// this to show the movie data once i click on update button
    const sendReq=async()=>{
        const serverUrl=`${process.env.REACT_APP_SERVER_URL}movies`
        const result= await axios.get(serverUrl)
        console.log(result.data)
        setFavMovies(result.data)
      
    }

    useEffect(()=>{
        sendReq()
    },[])

   const handleUpdate=(item)=>{
    setShowUpdate(true)
    setClickedMovie(item)
   }
const takeUpdatedDataFromChild=(arr)=>{
setFavMovies(arr)
}
   const handleClose=()=>{
    setShowUpdate(false)
   }

   const deleteModal= async (item) => {
    const serverUrl= `${process.env.REACT_APP_SERVER_URL}`
    const result= await axios.delete(`${serverUrl}movies/${item.id}`)
    setFavMovies(result.data)
    // takeUpdatedDataFromChild(result.data)
    console.log(result.data)
   };

    return(
        <>
        <h1>this is fav list</h1>
       {/*we got these names from the data names(i consoled them in the console) or from the server in the function addFavMemeHandler(for the route favlist) */}
                

        <Row xs={1} md={4} className="g-4">
      {favMovies.map((item,idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.posterpath} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
               <h4>{item.releasedate}</h4>
               <p>{item.overview}</p>
              </Card.Text>
            <Button onClick={()=>{handleUpdate(item)}} variant="success">Update</Button>
            <Button onClick={()=>{deleteModal(item)}}  variant="danger">Delete</Button>
            
            </Card.Body>

          </Card>
        </Col>
      ))}
    </Row>
    <UpdateModal showFlag={showUpdate} updateMovies={clickedMovie} handleClose={handleClose} takeUpdatedDataFromChild={takeUpdatedDataFromChild}/>
        </>
    )
}
export default FavList;