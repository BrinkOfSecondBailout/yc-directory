import Navbar from './Navbar';
import { auth } from '@/auth';

const NavbarWrapper = async () => {
    const session = await auth(); // Fetch session data on the server

    return <Navbar session={session} />;
}

export default NavbarWrapper;