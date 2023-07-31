import style from './NewUserForm.module.scss';
import {useState} from 'react';
import {clearInputs, generateUniqueID} from '../../helperFunctions/helperFunctions';

export default function UserForm(props) {
    // ---------------------------------------------------------------- //
    // ------------------- GET newUser DATA SET UP -------------------- //
    // ---------------------------------------------------------------- //

    // ---------------------------- HOOKS ----------------------------- //

    const [newUserName, setNewUserName] = useState('');
    const [newUserAge, setNewUserAge] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPosition, setNewUserPosition] = useState('');

    // --------------------- DEFAULT STATE VALUES --------------------- //

    const newUserNameHandler = e => setNewUserName(e.target.value);
    const newUserAgeHandler = e => setNewUserAge(e.target.value);
    const newUserEmailHandler = e => setNewUserEmail(e.target.value);
    const newUserPositionHandler = e => setNewUserPosition(e.target.value);

    // ---------------------------------------------------------------- //
    // -------------------------- FUNCTIONS --------------------------- //
    // ---------------------------------------------------------------- //

    // --------------------------- HANDLERS --------------------------- //

    function openCloseFormHandler() {
        clearInputs([setNewUserName, setNewUserAge, setNewUserEmail, setNewUserPosition]);
        props.openCloseForm(false);
    }

    // --------------------- GETTING newUser DATA --------------------- //

    function onAddNewUser(e) {
        e.preventDefault();

        const newUser = {
            id: generateUniqueID(),
            name: newUserName,
            age: +newUserAge,
            email: newUserEmail,
            position: newUserPosition,
        };

        props.getNewUser(newUser);
        openCloseFormHandler();
    }

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //

    if (props.userFormState === false) {
        return <button onClick={() => props.openCloseForm(true)}>+ New User</button>;
    }

    return (
        <form onSubmit={onAddNewUser} className={style['user-form']} action="submit">
            <input
                onChange={newUserNameHandler}
                value={newUserName}
                className={style.name}
                type="text"
                placeholder="Name"
            />
            <input
                onChange={newUserAgeHandler}
                value={newUserAge}
                className={style.age}
                type="number"
                placeholder="Age"
            />
            <input
                onChange={newUserEmailHandler}
                value={newUserEmail}
                className={style.email}
                type="text"
                placeholder="Email"
            />
            <input
                onChange={newUserPositionHandler}
                value={newUserPosition}
                className={style.position}
                type="text"
                placeholder="Position"
            />
            <button className={style['add-new-user']} type="submit">
                Add New User
            </button>
            <button className={style.close} onClick={openCloseFormHandler}>
                Close
            </button>
        </form>
    );
}
