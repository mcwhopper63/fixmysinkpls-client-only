import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';

const StyledBtn = styled.button`
    font-size: 1.5rem;
    background: red;
    color: white;
`;

const Styledh1 = styled.h1`
    font-size: 2rem;
    background: yellow;
    text-align: center;
`;

const Landing = () => {
    return (
        <div>
            <Styledh1>Landing Page</Styledh1>
            {/* <h1>Landing Page</h1> */}
            <StyledBtn>button</StyledBtn>
        </div>
    );
};
export default Landing;
