import style from './EditUserForm.module.scss';

export default function EditUserForm(props) {
    const {name, age, email, position} = props.user;

    return (
        <form className={style['user-edit-form']} action="submit">
            <input defaultValue={name} className={style.name} type="text" placeholder="Name" />
            <input defaultValue={age} className={style.age} type="number" placeholder="Age" />
            <input defaultValue={position} className={style.position} type="text" placeholder="Position" />
            <input defaultValue={email} className={style.email} type="text" placeholder="Email" />
            <button className={style['delete-user-btn']} type="submit">
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
