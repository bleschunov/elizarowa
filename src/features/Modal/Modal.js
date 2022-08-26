import { CSSTransition } from 'react-transition-group'

import diploma from '../../images/diploma.jpg'
import './Modal.scss'

const Modal = ({ modalDialogue, setModalDialogue }) => {
     return (
        <CSSTransition 
            in={modalDialogue} 
            timeout={300} 
            classNames="modal"
            onEntering={() => document.body.style.overflow = 'hidden'}
            onExiting={() => document.body.style.overflow = 'scroll'}>
            <div className="modal" onClick={ () => setModalDialogue(false) }>
                <div className="modal__dialogue">
                    <div className="modal__imageWrapper">
                        <img className="modal__image" src={diploma} alt='сертификат' /> 
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal