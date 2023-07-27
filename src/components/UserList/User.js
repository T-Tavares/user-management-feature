import style from './User.module.css';
import userIcon from '../../assets/person-badge.svg';
import editIcon from '../../assets/pencil-square.svg';
import deleteIcon from '../../assets/x-circle.svg';

export default function User(props) {
    return (
        <div className={style.user}>
            <img className={style.icon} src={userIcon} alt="User Icon" />
            <p className={style.name}>NAME:&nbsp;&nbsp;</p>
            <p className={style.position}>POSITION</p>
            <img className={`${style.edit} ${style.icon}`} src={editIcon} alt="Edit User Icon" />
            <img className={`${style.delete} ${style.icon}`} src={deleteIcon} alt="Delete Icon" />
        </div>
    );
}
