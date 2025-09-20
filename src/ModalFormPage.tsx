import { useModal } from "./ModalContext";
import ModalForm from "./ModalForm";

const ModalFormPage = () => {
  const { openModal } = useModal();

  return (
    <button
      onClick={() =>
        openModal(({ closeModal }) => <ModalForm onClose={closeModal} />)
      }
    >
      모달 열기
    </button>
  );
};

export default ModalFormPage;
