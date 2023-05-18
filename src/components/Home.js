import MovieList from './MovieList'
import Nav from 'react-bootstrap/Nav';
function Home(){
 
    return(
        <>
          <Nav.Link href="/">Home</Nav.Link>
          <MovieList/>
        </>
    )
}

export default Home;