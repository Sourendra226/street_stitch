import BlogCard from "./BlogCard";
import blogData from "../data/blogData.json";

function BlogList() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-9">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            text={blog.text}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
