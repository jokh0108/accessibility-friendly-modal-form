import { createPortal } from "react-dom";
export default function ModalPortal({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    children && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 bg-opacity-50 transition-opacity"
          aria-hidden="true"
          onClick={closeModal}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md max-h-[90vh] overflow-auto bg-white rounded-lg shadow-xl">
          {children}
        </div>
      </div>
    ),
    modalRoot
  );
}
