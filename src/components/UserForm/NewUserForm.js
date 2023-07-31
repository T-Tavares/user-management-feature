import style from './NewUserForm.module.scss';

export default function UserForm(props) {
    if (props.userFormState === false) {
        return <button onClick={() => props.openCloseForm(true)}>+ New User</button>;
    }

    if (props.func === 'edit') {
        return (
            <form className={style['user-edit-form']} action="submit">
                <input className={style.name} type="text" placeholder="Name" />
                <input className={style.age} type="number" placeholder="Age" />
                <input className={style.position} type="text" placeholder="Position" />
                <input className={style.email} type="text" placeholder="Email" />
                <button className={style['delete-user-btn']} type="submit">
                    Delete
                </button>
                <button className={style['accept-btn']} type="submit">
                    Accept
                </button>
                <button className={style['cancel-btn']} type="submit">
                    Cancel
                </button>
            </form>
        );
    }
    return (
        <form className={style['user-form']} action="submit">
            <input className={style.name} type="text" placeholder="Name" />
            <input className={style.age} type="number" placeholder="Age" />
            <input className={style.email} type="text" placeholder="Email" />
            <input className={style.position} type="text" placeholder="Position" />
            <button className={style['add-new-user']} type="submit">
                Add New User
            </button>
            <button className={style.close} onClick={() => props.openCloseForm(false)}>
                Close
            </button>
        </form>
    );
}
