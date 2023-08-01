// --------------------- MODULE STYLE IMPORT ---------------------- //
import ReactDOM from 'react-dom';
import {Fragment} from 'react';
import style from './Message.module.scss';

export default function Message(props) {
    // --------------------- POPUP ERROR HANDLER ---------------------- //

    const closeErrorPopUpHandler = e => {
        if (!e.target.dataset.type) return;
        props.closeErrorMessage();
    };

    const Overlay = props => {
        return (
            <div data-type="backdrop" onClick={closeErrorPopUpHandler} className={style.backdrop}>
                <div className={style['message-box']}>
                    <p className={style.message}>ERROR:</p>
                    <p className={style.message}>{props.errorMessage}</p>
                    <button data-type="button" className={style['message-btn']}>
                        Ok, will fix it.
                    </button>
                </div>
            </div>
        );
    };

    // ---------------------------------------------------------------- //
    // --------------------- RETURNING COMPONENT ---------------------- //
    // ---------------------------------------------------------------- //
    return (
        <Fragment>
            {ReactDOM.createPortal(<Overlay errorMessage={props.errorMessage} />, document.getElementById('root'))}
        </Fragment>
    );
}
