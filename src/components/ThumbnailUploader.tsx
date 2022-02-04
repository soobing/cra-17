import { useRef } from "react";
import "./ThumbnailUploader.css";

export default function ThumbnailUploader() {
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
    <div className="thumbnail-uploader__wrapper">
      <input
        ref={inputEl}
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
      />
      <ul className="thumbnail-uploader__cards">
        <li>
          <button
            className="thumbnail-uploader__button"
            onClick={onClickUpload}
          >
            +
          </button>
        </li>
        <li className="thumbnail-uploader__card">
          <img
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt="이미지"
          />
          <button className="thumbnail-uploader__delete">X</button>
        </li>
      </ul>
    </div>
  );
}
