import Image from "../../assets/images/icons/image.png";

function FileUpload(props) {
  const handleImageUpload = (e) => {
    props.onUpload(e)
  };
  return (
    <>
      <div className="caption">
        <h4>Upload Prescription here</h4>
        <p>To place Asaan order please upload prescription here</p>
      </div>
      <div className="document-upload">
        <input
          type="file"
          id="file"
          className="file-upload"
          hidden
          onChange={(e) => handleImageUpload(e)}
        />
        <label htmlFor="file">
          <span className="icon">
            <img src={Image} alt="" />
          </span>
          <h4>
            Drop image here, or <span>browse</span>{" "}
          </h4>
          <span className="support">Supprorts: JPG , PNG</span>
        </label>
      </div>
    </>
  );
}

export default FileUpload;
