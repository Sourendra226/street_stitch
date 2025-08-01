import PropTypes from "prop-types";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pageLimit = 3;

  if (totalPages <= 1) return null;

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

  const goToPage = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="row justify-content-center align-items-center pagination_row">
      <ul className="list-inline mb-0 d-flex justify-content-center align-items-center text-center pagination">
        {/* Previous Button */}
        <li
          className={`list-inline-item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <button
            className="text-decoration-none d-flex justify-content-center align-items-center"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </li>

        {/* Numbered Page Buttons */}
        {pages.map((page) => (
          <li
            className={`list-inline-item ${
              currentPage === page ? "active" : ""
            }`}
            key={page}
          >
            <button
              className="text-decoration-none d-flex justify-content-center align-items-center"
              onClick={() => goToPage(page)}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`list-inline-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="text-decoration-none d-flex justify-content-center align-items-center"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </li>
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
