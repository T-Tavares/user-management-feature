import style from './Message.module.scss';

export default function Message(props) {
    const closeErrorPopUpHandler = e => {
        if (!e.target.dataset.type) return;
        props.closeErrorMessage();
    };

    return (
        <div data-type="backdrop" onClick={closeErrorPopUpHandler} className={style.backdrop}>
            <div className={style['message-box']}>
                <p className={style.message}>Error</p>
                <p className={style.message}>{props.errorMessage}</p>
            </div>
            <button data-type="button" className={style['message-btn']}>
                Ok, will fix it.
            </button>
        </div>
    );
}
