import React from "react";

function Modal({ open, onClose, children }) {
  return (
    open && (
      // Backdrop
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-0"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          // This will prevent Modal Close when we click on the modal it self (We can still close the modal by clicking on the backdrop)
          onClick={(e) => e.stopPropagation()}
          className="relative bg-[#191d24] p-10 border-2 border-gray-800 rounded-md min-w-full sm:min-w-[600px]"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 px-3 py-1 btn-outline btn-error"
          >
            X
          </button>
          <h3>Update Todo</h3>
          <hr className=" border-slate-800 my-4" />
          <div className="flex flex-col py-2">{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
