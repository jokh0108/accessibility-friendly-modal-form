const ModalForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    onClose();
  };

  return (
    <div className="flex flex-col">
      <h1 id="modal-title">신청 폼</h1>
      <h2 id="modal-description">
        이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name">이름 / 닉네임</label>
        <input name="name" />

        <label htmlFor="email">이메일</label>
        <input type="email" name="email" />

        <label htmlFor="year">FE 경력 연차</label>
        <select name="score">
          <option value="A">0~3년</option>
          <option value="B">4~7년</option>
          <option value="C">8년차 이상</option>
        </select>

        <label htmlFor="github">Github 링크 (선택)</label>
        <input name="github" />

        <div className="self-end flex flex-row items-center ">
          <button type="button" onClick={onClose}>
            취소
          </button>
          <button type="submit">제출</button>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
