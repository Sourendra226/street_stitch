import { Link } from "react-router-dom";
import BlogList from "./BlogList";

function Blog() {
	return (
		<section className="blog">
	        <div className="container">
	          <p className="text-center text-uppercase secSubhead">The Stitch Journal</p>
	          <p className="text-center text-capitalize secTitleNew">
	            From street trends to styling hacks
	            <span className="d-none d-md-inline-block">—</span>
	            <br className="d-block d-md-none" />dig deeper into the culture.
	          </p>
	          <BlogList />
	          <Link
	            to="#"
	            onClick={(e) => e.preventDefault()}
	            className="text-decoration-none text-uppercase d-block mx-auto text-center common_btn blog_btn"
	            >
	            View All</Link
	          >
	        </div>
      	</section>
	);
}

export default Blog;
