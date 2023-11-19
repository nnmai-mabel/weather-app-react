import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
	return (
		<>
			<Navbar bg="light" data-bs-theme="light">
				<Container>
					<Navbar.Brand href="/">Weather App</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/Home">Home</Nav.Link>
						<Nav.Link href="/Weather">Weather</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default App;
