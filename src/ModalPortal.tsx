import { createPortal } from "react-dom";
export default function ModalPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    return null;
  }

  return createPortal(children, modalRoot);
}
