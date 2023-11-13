import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { Logo } from '../components';

const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-center">
                <button className="toggle-btn" type="button">
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <div className="btn-container">toggle/logout</div>
            </div>
        </Wrapper>
    );
};
export default Navbar;
