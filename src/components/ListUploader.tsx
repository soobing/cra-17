import "./ListUploader.css";

export default function ListUploader() {
  return (
    <div className="list-uploader__wrapper">
      <button className="list-uploader__button">사진 첨부하기</button>
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
