// --------------------------- IMPORTS ---------------------------- //

import style from './User.module.scss';
import userIcon from '../../assets/person-badge.svg';
import editIcon from '../../assets/pencil-square.svg';

// ---------------------------------------------------------------- //

export default function User(props) {
    // --------------------- PROPS DECONSTRUCTION --------------------- //
    const {id, name, position} = props.user;

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //
    return (
        <div className={style.user}>
            <img className={style.icon} src={userIcon} alt="User Icon" />
            <p className={style.name}>{name} &nbsp; ></p>
            <p className={style.position}>{position}</p>
            <button onClick={() => props.openEditUserForm(id)} className={style['edit-btn']}>
                <img className={`${style.edit} ${style.icon}`} src={editIcon} alt="Edit User Icon" />
            </button>
        </div>
    );
}
