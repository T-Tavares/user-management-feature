// --------------------------- IMPORTS ---------------------------- //

import style from './NewUserForm.module.scss';
import {useState} from 'react';
import {clearInputs, generateUniqueID} from '../../helperFunctions/helperFunctions';

// ---------------------------------------------------------------- //

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

        // -------------- ERROR CATCH TO RENDER ERROR POPUP --------------- //

        if (newUser.name.trim().length <= 0) return props.onInputError('Please input a valid Name.');
        if (newUser.age <= 0) return props.onInputError('Please input a positive number for the user age.');
        if (newUser.age <= 17) return props.onInputError('The staff member must be +18 to work here.');
        if (newUser.email.trim().length <= 0) return props.onInputError('Please input a valid email.');
        if (newUser.position.trim().length <= 0) return props.onInputError('Please input a valid position.');

        // ------------- PASS NEWUSER DATA UP AND CLOSE FORM -------------- //

        props.getNewUser(newUser);
        openCloseFormHandler();
    }

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //

    // ------------------- OPEN FORM BUTTON RENDER -------------------- //

    if (props.userFormState === false) {
        return <button onClick={() => props.openCloseForm(true)}>+ New User</button>;
    }

    // --------------------- NEW USER FORM RENDER --------------------- //

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
                // min={0} Alternative to the MessageErrorPopUp
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
