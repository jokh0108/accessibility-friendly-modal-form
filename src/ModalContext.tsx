import { createContext, useContext, useState } from "react";
import ModalPortal from "./ModalPortal";

type ModalContent = ({
  closeModal,
}: {
  closeModal: () => void;
}) => React.ReactNode;

type TModalContext = {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
};

const ModalContext = createContext<TModalContext | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => setModal(() => content);
  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalPortal>{modal ? modal({ closeModal }) : null}</ModalPortal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
