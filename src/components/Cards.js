import star from "../images/Star.png";

export default function Cards(props) {
  return (
    <section className="cards">
      <div className="cards--container">
        <div className="card--img">
          <img src={props.image} alt="Card" />
          <p>{props.productState}</p>
        </div>
        <div className="rating">
          <img src={star} alt="star" />
          <p>{props.rating}</p>
          <p className="num-of-reviews">({props.reviewCount})</p>
          <p className="location">{props.country}</p>
        </div>
        <div className="card--title">
          <h3>{props.title}</h3>
        </div>
        <div className="pricing">
          <p className="price">
            <span>${props.price} /</span> person
          </p>
        </div>
      </div>
    </section>
  );
}
