import "./ThumbnailUploader.css";

export default function ThumbnailUploader() {
  return (
    <div className="thumbnail-uploader__wrapper">
      <ul className="thumbnail-uploader__cards">
        <li>
          <button className="thumbnail-uploader__button">+</button>
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
