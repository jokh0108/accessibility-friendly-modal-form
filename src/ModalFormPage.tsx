import { useModal } from "./ModalContext";
import ModalForm from "./ModalForm";

const ModalFormPage = () => {
  const { openModal } = useModal();

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={() =>
          openModal(({ closeModal }) => <ModalForm onClose={closeModal} />)
        }
      >
        모달 열기
      </button>
    </div>
  );
};

export default ModalFormPage;
