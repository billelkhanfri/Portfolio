import "../styles/common.css";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imageUrl} alt={props.alt} />
    </div>
  );
}

export default Avatar;
