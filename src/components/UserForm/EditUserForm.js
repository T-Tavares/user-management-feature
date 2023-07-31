import style from './EditUserForm.module.scss';
import {useState} from 'react';

export default function EditUserForm(props) {
    const {id, name, age, email, position} = props.user;

    const [editName, setEditName] = useState(name);
    const [editAge, setEditAge] = useState(age);
    const [editPosition, setEditPosition] = useState(position);
    const [editEmail, setEditEmail] = useState(email);

    const setEditNameHandler = e => setEditName(e.target.value);
    const setEditAgeHandler = e => setEditAge(e.target.value);
    const setEditPositionHandler = e => setEditPosition(e.target.value);
    const setEditEmailHandler = e => setEditEmail(e.target.value);

    const editUserFormHandler = e => {
        e.preventDefault();
        const updatedUserObj = {
            id: id,
            name: editName,
            age: +editAge,
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

    function deleteUserHandler(e) {
        e.preventDefault();
        props.deleteUser(id);
    }
    return (
        <form onSubmit={editUserFormHandler} className={style['user-edit-form']} action="submit">
            <input
                onChange={setEditNameHandler}
                defaultValue={editName}
                className={style.name}
                type="text"
                placeholder="Name"
            />
            <input
                onChange={setEditAgeHandler}
                defaultValue={editAge}
                className={style.age}
                type="number"
                placeholder="Age"
            />
            <input
                onChange={setEditPositionHandler}
                defaultValue={editPosition}
                className={style.position}
                type="text"
                placeholder="Position"
            />
            <input
                onChange={setEditEmailHandler}
                defaultValue={editEmail}
                className={style.email}
                type="text"
                placeholder="Email"
            />
            <button onClick={deleteUserHandler} className={style['delete-user-btn']}>
                Delete
            </button>
            <button className={style['accept-btn']} type="submit">
                Accept
            </button>
            <button onClick={() => props.sendEditUserStateUp(email)} className={style['cancel-btn']}>
                Cancel
            </button>
        </form>
    );
}
