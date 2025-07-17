function InstagramSection() {
  const images = [
    "insta_one.jpg",
    "insta_two.jpg",
    "insta_three.jpg",
    "insta_four.jpg",
    "insta_five.jpg",
    "insta_six.jpg",
  ];

  return (
    <section className="instagramSec">
      <div className="container">
        <p className="text-center text-uppercase secSubhead">
          Stitched On Instagram
        </p>
        <p className="text-center text-capitalize secTitleNew">
          Tag @streetstitch + #StitchedUp to get featured.
        </p>
        <p className="text-center instaText">
          It's more than clothes — it's how you wear them. Check out how real
          people are repping Street Stitch in their own element. <br />
          Want to be featured? Post your fit and tag us @streetstitch.
        </p>
        <div className="row">
          {images.map((img, index) => (
            <div
              key={index}
              className={`col-6 col-md-4 col-lg-2 ${
                index % 2 === 0 ? "ps-md-0 pe-0" : "pe-md-0 ps-0"
              }`}
            >
              <img
                src={`/assets/images/${img}`}
                alt="Instagram Post"
                className="img-fluid w-100 d-block mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
