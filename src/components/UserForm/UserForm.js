import style from './UserForm.module.scss';

export default function UserForm(props) {
    if (props.isOpen === false) {
        return <button>+ New User</button>;
    }
    return (
        <form className={style['user-form']} action="submit">
            <input className={style.name} type="text" placeholder="Name" />
            <input className={style.age} type="number" placeholder="Age" />
            <input className={style.email} type="text" placeholder="Email" />
            <input className={style.position} type="text" placeholder="Position" />
            <button type="submit">Add New User</button>
        </form>
    );
}
