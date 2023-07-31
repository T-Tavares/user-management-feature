import User from './User';
import EditUserForm from '../UserForm/EditUserForm';
import style from './UserList.module.scss';

export default function UserList(props) {
    const userEditStateHandler = data => props.sendEditUserStateUp(data);

    const usersMappedArray = props.users.map(usr => {
        let editUserForm;

        if (usr.isEditOpen) {
            editUserForm = (
                <EditUserForm
                    user={usr}
                    key={`${usr.id}-FormKey`}
                    sendEditUserStateUp={userEditStateHandler}
                    deleteUser={props.deleteUser}
                    editUser={props.editUser}
                />
            );
        }

        return [<User user={usr} key={usr.id} sendEditUserStateUp={userEditStateHandler} />, editUserForm];
    });
    if (props.users.length <= 0)
        return (
            <div className={style['internal-card']}>
                <p className={style.message}>Add some users to your list on the botton above</p>
            </div>
        );
    return <div className={style['internal-card']}>{usersMappedArray}</div>;
}
