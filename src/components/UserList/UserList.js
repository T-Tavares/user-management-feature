// --------------------------- IMPORTS ---------------------------- //

import User from './User';
import EditUserForm from '../UserForm/EditUserForm';
import style from './UserList.module.scss';
import {Fragment} from 'react';

// ---------------------------------------------------------------- //

export default function UserList(props) {
    const openEditUserFormHandler = data => props.openEditUserForm(data);

    // --------------- CONDITIONALLY BUILDING COMPONENT --------------- //

    const usersMappedArray = props.users.map(usr => {
        let editUserForm;

        if (usr.isEditOpen) {
            editUserForm = (
                <EditUserForm
                    user={usr}
                    key={`${usr.id}-FormKey`}
                    openEditUserForm={openEditUserFormHandler}
                    deleteUser={props.deleteUser}
                    editUser={props.editUser}
                    onInputError={props.onInputError}
                />
            );
        }

        return (
            <Fragment>
                <User user={usr} key={usr.id} openEditUserForm={openEditUserFormHandler} />
                {editUserForm}
            </Fragment>
        );
    });

    // -------------- IF NO USERS => RENDER WELCOME MSG --------------- //

    if (props.users.length <= 0)
        return (
            <div className={style['internal-card']}>
                <p className={style.message}>Add some users to your list on the botton above</p>
            </div>
        );

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //

    return <Fragment>{usersMappedArray}</Fragment>;
    // return <div className={style['internal-card']}>{usersMappedArray}</div>;
}
