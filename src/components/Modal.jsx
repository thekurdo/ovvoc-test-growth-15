import React, { forwardRef, useImperativeHandle, useState } from 'react';
// PropTypes removed - use TypeScript for type checking

const Modal = forwardRef(function Modal({ title, children, onClose }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => {
      setIsOpen(false);
      onClose && onClose();
    },
  }));

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={() => ref.current.close()}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
});

Modal.defaultProps = {
  title: 'Dialog',
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default Modal;
