const ModalFormPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  const handleCancel = () => {
    console.log(123);
  };

  return (
    <div className="flex flex-col">
      <h1>신청 폼</h1>
      <span>이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요</span>
      <form onSubmit={handleSubmit}>
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

        <button type="button" onClick={handleCancel}>
          취소
        </button>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default ModalFormPage;
