import { Logo } from './Logo';

const FormRow = ({ type, name, labelText, defaultValue }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                defaultValue="Renato"
                required
            />
        </div>
    );
};
export default FormRow;
