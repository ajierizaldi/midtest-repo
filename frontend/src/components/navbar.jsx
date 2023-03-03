import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authSlice';


function NavBar() {
    const { userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const logOut = () => {
        if (window.confirm("Udahan nih?")) {
            window.location = '/'
            dispatch(logout())
        }
    }

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="#home">Mid-Test</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link><Link to="/dashboard"><h3>Dashboard</h3></Link></Nav.Link>
                    <Nav.Link><Link to="/product"><h3>Product</h3></Link></Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='p-2'>
                        Signed in as: <span className='text-white'>{userInfo?.data.username}</span>
                    </Navbar.Text>
                    <Button className='p-3' variant='danger' onClick={logOut}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;