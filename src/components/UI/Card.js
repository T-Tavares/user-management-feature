// --------------------- MODULE STYLE IMPORT ---------------------- //
import style from './Card.module.scss';

// --------------------- RETURNING COMPONENT ---------------------- //
export default function Card(props) {
    return <div className={style.card}>{props.children}</div>;
}
