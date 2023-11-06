import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../components';

const Register = () => {
    return (
        <Wrapper>
            <form action="" className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type="text" name="name" defaultValue="John" />
                <FormRow
                    type="text"
                    name="last name"
                    labelText="Last Name"
                    defaultValue="Tenant"
                />
                <FormRow
                    type="text"
                    name="location"
                    defaultValue="Great Condo"
                />
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="john@email.com"
                />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="password1234"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Register;
