import React from 'react'

import ReactDOM from 'react-dom'


const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(34,34,34)',
    transform: 'translate(-50%,-50%)',
    zIndex: 1000,
    height: '90%',
    width: '90%'
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',

    zIndex: 1000,
}
function Modal({ children, onClose }) {
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLE}>
                <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        document.getElementById('card-root')
    )
}
export default Modal