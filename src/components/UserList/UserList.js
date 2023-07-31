import User from './User';
import EditUserForm from '../UserForm/EditUserForm';
import style from './UserList.module.scss';

export default function UserList(props) {
    const userEditStateHandler = data => props.sendEditUserStateUp(data);

    const usersMappedArray = props.users.map(usr => {
        const editUserForm = usr.isEditOpen ? (
            <EditUserForm user={usr} key={`${usr.email}-FormKey`} sendEditUserStateUp={userEditStateHandler} />
        ) : (
            ''
        );

        return [<User user={usr} key={usr.email} sendEditUserStateUp={userEditStateHandler} />, editUserForm];
    });

    return <div className={style['internal-card']}>{usersMappedArray}</div>;
}
