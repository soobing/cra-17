import ListUploader from "../components/ListUploader";
import ThumbnailUploader from "../components/ThumbnailUploader";

export default function Upload() {
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>이미지 업로드</h1>
      <p>갯수, 사이즈, 이미지 형식 제한</p>
      <hr />
      <h2>case1</h2>
      <ListUploader />
      <hr />
      <h2>case2</h2>
      <ThumbnailUploader />
    </div>
  );
}
