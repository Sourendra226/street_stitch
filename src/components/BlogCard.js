function BlogCard({ title, text, image }) {
  return (
    <div className="blog_card">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={image} alt={title} className="img-fluid w-100" />
        </div>
        <div className="col-md-6">
          <p className="blog_title">{title}</p>
          <p className="blog_txt">{text}</p>
          <button
            type="button"
            className="text-decoration-none text-uppercase blog_view_btn"
            onClick={() => console.log(`Read more about: ${title}`)}
          >
            <span>Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
