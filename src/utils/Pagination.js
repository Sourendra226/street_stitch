import PropTypes from "prop-types";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pageLimit = 3;

  const getPageRange = () => {
    let start = Math.max(1, currentPage - Math.floor(pageLimit / 2));
    let end = start + pageLimit - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - pageLimit + 1);
    }

    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  const pages = getPageRange();

  return (
    <div className="row justify-content-center align-items-center pagination_row">
      <ul className="list-inline mb-0 d-flex justify-content-center align-items-center text-center pagination">
        {/* Previous Button */}
        {currentPage > 1 && (
          <li className="list-inline-item">
            <button
              className="text-decoration-none d-flex justify-content-center align-items-center"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
          </li>
        )}

        {/* Numbered Page Buttons */}
        {pages.map((page) => (
          <li
            className={`list-inline-item ${currentPage === page ? "active" : ""}`}
            key={page}
          >
            <button
              className="text-decoration-none d-flex justify-content-center align-items-center"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <li className="list-inline-item">
            <button
              className="text-decoration-none d-flex justify-content-center align-items-center"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
