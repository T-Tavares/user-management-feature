// --------------------------- IMPORTS ---------------------------- //

import style from './EditUserForm.module.scss';
// import {useState, useRef} from 'react';
import {useRef} from 'react';

// ---------------------------------------------------------------- //

export default function EditUserForm(props) {
    // --------------------- PROPS DECONSTRUCTION --------------------- //

    const {id, name, age, email, position} = props.user;

    // ------------------------- REACT HOOKS -------------------------- //

    const editNameRef = useRef(name);
    const editAgeRef = useRef(age);
    const editPositionRef = useRef(position);
    const editEmailRef = useRef(email);
    // --------------------------- HANDLERS --------------------------- //

    const deleteUserHandler = e => {
        e.preventDefault();
        props.deleteUser(id);
    };

    const editUserFormHandler = e => {
        e.preventDefault();

        const editName = editNameRef.current.value;
        const editAge = +editAgeRef.current.value;
        const editEmail = editEmailRef.current.value;
        const editPosition = editPositionRef.current.value;

        const updatedUserObj = {
            id: id,
            name: editName,
            age: editAge,
            position: editPosition,
            email: editEmail,
        };

        // -------------- ERROR CATCH TO RENDER ERROR POPUP --------------- //

        if (updatedUserObj.name.trim().length <= 0) return props.onInputError('Please input a valid Name.');
        if (updatedUserObj.age <= 0) return props.onInputError('Please input a positive number for the user age.');
        if (updatedUserObj.age <= 17) return props.onInputError('The staff member must be +18 to work here.');
        if (updatedUserObj.email.trim().length <= 0) return props.onInputError('Please input a valid email.');
        if (updatedUserObj.position.trim().length <= 0) return props.onInputError('Please input a valid position.');

        // ------------- PASS NEWUSER DATA UP AND CLOSE FORM -------------- //
        props.editUser(updatedUserObj);
    };

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //
    if (!props.user.isEditOpen) return;
    return (
        <form onSubmit={editUserFormHandler} className={style['user-edit-form']} action="submit">
            <input defaultValue={name} className={style.name} type="text" placeholder="Name" ref={editNameRef} />
            <input defaultValue={age} className={style.age} type="number" placeholder="Age" ref={editAgeRef} />
            <input
                defaultValue={position}
                className={style.position}
                type="text"
                placeholder="Position"
                ref={editPositionRef}
            />
            <input defaultValue={email} className={style.email} type="text" placeholder="Email" ref={editEmailRef} />
            <button onClick={deleteUserHandler} className={style['delete-user-btn']}>
                Delete
            </button>
            <button className={style['accept-btn']} type="submit">
                Accept
            </button>
            <button onClick={() => props.openEditUserForm(id)} className={style['cancel-btn']}>
                Cancel
            </button>
        </form>
    );
}
