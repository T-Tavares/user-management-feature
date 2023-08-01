// --------------------- MODULE STYLE IMPORT ---------------------- //
import style from './Header.module.scss';

// --------------------- RETURNING COMPONENT ---------------------- //
export default function Header() {
    return (
        <header className={style.header}>
            <h1>User Management</h1>
        </header>
    );
}
