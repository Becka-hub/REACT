import React from 'react'
import './Modal.css'
function Modal(props) {
    return (
        <div className="corp" onClick={props.cache} style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}>
            <div className="Modal">
                <div className="d-flex justify-content-end mb-2">
                    <button className="btn btn-sm btn-danger" onClick={props.cache}>X</button>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged.
                </p>
            </div>
        </div>
    );
}

export default Modal;