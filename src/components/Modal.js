import React, { useRef, useEffect } from "react";
function Modal({ isOpen, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleModalClose = () => {
        onClose();
    };

    if (!isOpen) return null;

    return(
        <div className='backdrop'>
            <div className='modal'  ref={modalRef}>
                <button className='modal-btn-close modal__btn-close button' type='button'  onClick={handleModalClose}>Close</button>
                <h2>Замовити дзвінок</h2>
                <p>Залишіть заявку та наш спеціаліст зв'яжеться з Вами!</p>
                <form name="modal-form" autoComplete="off">
                    <div className="modal__form-field input">
                        <label className="input__label visually-hidden" htmlFor="modal-user-name">Ім'я</label>
                        <input className="input__control" type="text" id="modal-user-name" name="modal-user-name"
                               placeholder="Ім'я"/>
                    </div>
                    <div className="modal__form-field input">
                        <label className="input__label visually-hidden" htmlFor="modal-user-tel">Телефон</label>
                        <input className="input__control" type="tel" id="modal-user-tel" name="modal-user-tel"
                               placeholder="Телефон"/>
                    </div>
                    <div className="modal__form-field input">
                        <label className="input__label visually-hidden" htmlFor="modal-user-email">Електронна пошта</label>
                        <input className="input__control" type="email" id="modal-user-email" name="modal-user-email"
                               placeholder="Електронна пошта"/>
                    </div>
                    <button className="modal__button button" type="submit">Замовити дзвінок</button>
                    <p class="form-terms">Натискаючи на кнопку я погоджуюсь <a class="form-terms-link" href="#">з політикою
                        конфіденційності</a></p>
                </form>
            </div>
        </div>
    );
}

export default Modal;