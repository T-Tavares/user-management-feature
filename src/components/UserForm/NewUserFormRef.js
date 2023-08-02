// --------------------------- IMPORTS ---------------------------- //

import style from './NewUserForm.module.scss';
import {useRef} from 'react';
// import {generateUniqueID, clearInputsRefs} from '../../helperFunctions/helperFunctions';
import {generateUniqueID} from '../../helperFunctions/helperFunctions';

// ---------------------------------------------------------------- //

export default function UserForm(props) {
    // ---------------------------------------------------------------- //
    // ------------------- GET newUser DATA SET UP -------------------- //
    // ---------------------------------------------------------------- //

    // ---------------------------- HOOKS ----------------------------- //

    const newUserNameRef = useRef();
    const newUserAgeRef = useRef();
    const newUserEmailRef = useRef();
    const newUserPositionRef = useRef();

    // --------------------- GETTING newUser DATA --------------------- //

    function onAddNewUser(e) {
        e.preventDefault();

        const userName = newUserNameRef.current.value;
        const userAge = +newUserAgeRef.current.value;
        const userEmail = newUserEmailRef.current.value;
        const userPosition = newUserPositionRef.current.value;

        const newUser = {
            id: generateUniqueID(),
            name: userName,
            age: userAge,
            email: userEmail,
            position: userPosition,
        };

        // -------------- ERROR CATCH TO RENDER ERROR POPUP --------------- //

        if (newUser.name.trim().length <= 0) return props.onInputError('Please input a valid Name.');
        if (newUser.age <= 0) return props.onInputError('Please input a positive number for the user age.');
        if (newUser.age <= 17) return props.onInputError('The staff member must be +18 to work here.');
        if (newUser.email.trim().length <= 0) return props.onInputError('Please input a valid email.');
        if (newUser.position.trim().length <= 0) return props.onInputError('Please input a valid position.');

        // ------------- PASS NEWUSER DATA UP AND CLOSE FORM -------------- //

        props.getNewUser(newUser);
        /* 
            On this case I dont need to reset the input fields because once I close the form when I reopen it rerenders and all its 
            starting values are empty strings.
            But that's a helper function for it.

            clearInputsRefs(newUserNameRef, newUserAgeRef, newUserEmailRef, newUserPositionRef);
         */
        props.openCloseForm(false);
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
            <input className={style.name} type="text" placeholder="Name" ref={newUserNameRef} />
            <input className={style.age} type="number" placeholder="Age" ref={newUserAgeRef} />
            <input className={style.email} type="text" placeholder="Email" ref={newUserEmailRef} />
            <input className={style.position} type="text" placeholder="Position" ref={newUserPositionRef} />
            <button className={style['add-new-user']} type="submit">
                Add New User
            </button>
            <button className={style.close} onClick={() => props.openCloseForm(false)}>
                Close
            </button>
        </form>
    );
}
