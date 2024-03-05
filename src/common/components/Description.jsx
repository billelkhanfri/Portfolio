
function Description(props) {
  return (
    <>
      <div className="section-shapes section-shapes">
        <div className="section-square-wrapper ">
          <div className="section-square"></div>
          <h2> {props.title}</h2>
        </div>
        <div className="section-image">
          <a href="https://fr.freepik.com/photos-gratuite/portrait-3d-personnes_66108324.htm#fromView=search&page=1&position=22&uuid=c806e90e-25a8-4762-b6bd-ceeede87f5cf">
            <img src={props.image} alt="" />
          </a>
        </div>
      </div>
      <div className="section-description ">
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Description