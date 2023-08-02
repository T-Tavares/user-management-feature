// --------------------------- IMPORTS ---------------------------- //

import User from './User';
import EditUserForm from '../UserForm/EditUserFormRef';
import style from './UserList.module.scss';
import {Fragment} from 'react';

// ---------------------------------------------------------------- //

export default function UserList(props) {
    const openEditUserFormHandler = data => props.openEditUserForm(data);

    // -------------- IF NO USERS => RENDER WELCOME MSG --------------- //

    if (props.users.length <= 0)
        return (
            <div className={style['internal-card']}>
                <p className={style.message}>Add some users to your list on the botton above</p>
            </div>
        );

    // --------------- CONDITIONALLY BUILDING COMPONENT --------------- //

    return props.users.map(usr => {
        return (
            <Fragment key={`${usr.id}-Frag`}>
                <User user={usr} key={usr.id} openEditUserForm={openEditUserFormHandler} />
                <EditUserForm
                    user={usr}
                    key={`${usr.id}-FormKey`}
                    openEditUserForm={openEditUserFormHandler}
                    deleteUser={props.deleteUser}
                    editUser={props.editUser}
                    onInputError={props.onInputError}
                />
            </Fragment>
        );
    });
}
