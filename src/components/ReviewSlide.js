function ReviewSlide({ text, stars, image, name, place }) {
  return (
    <div className="review_slide text-center">
      <p className="review_text">{text}</p>
      <p className="review_stars">
        {[...Array(stars)].map((_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
      </p>
      <img src={image} alt={name} className="img-fluid d-block mx-auto review_image" />
      <p className="review_name text-uppercase">{name}</p>
      <p className="review_place">{place}</p>
    </div>
  );
}

export default ReviewSlide;
