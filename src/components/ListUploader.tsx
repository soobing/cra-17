import { useRef } from "react";
import "./ListUploader.css";

export default function ListUploader() {
  const inputEl = useRef<HTMLInputElement>(null);
  const onClickUpload = () => {
    inputEl?.current?.click();
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files ?? []).map((file) =>
      console.log(URL.createObjectURL(file))
    );
  };

  return (
    <div className="list-uploader__wrapper">
      <input
        ref={inputEl}
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <button className="list-uploader__button" onClick={onClickUpload}>
        사진 첨부하기
      </button>
      <ul className="list-uploader__cards">
        <li className="list-uploader__card">
          <div className="list-uploader__thumbnail">
            <img
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
              alt="이미지"
            />
          </div>
          <div className="list-uploader__contents">
            <label>첨부파일 1</label>
            <p>createdAt: 2021.12.25</p>
          </div>
          <button className="list-uploader__delete">X</button>
        </li>
      </ul>
    </div>
  );
}
