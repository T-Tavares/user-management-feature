// --------------------- MODULE STYLE IMPORT ---------------------- //

import style from './Message.module.scss';

export default function Message(props) {
    // --------------------- POPUP ERROR HANDLER ---------------------- //

    const closeErrorPopUpHandler = e => {
        if (!e.target.dataset.type) return;
        props.closeErrorMessage();
    };

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //
    return (
        <div data-type="backdrop" onClick={closeErrorPopUpHandler} className={style.backdrop}>
            <div className={style['message-box']}>
                <p className={style.message}>ERROR:</p>
                <p className={style.message}>{props.errorMessage}</p>
            </div>
            <button data-type="button" className={style['message-btn']}>
                Ok, will fix it.
            </button>
        </div>
    );
}
