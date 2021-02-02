import React from "react";

const Pagination = (props) => {
  const { totalItems, itemPerPage, onSlice } = props;
  const addPage = () => currentPage++;
  const subtractPage = () => currentPage--;
  var currentPage = 1;
  var firstIndex = currentPage * itemPerPage;
  var lastIndex = (currentPage + 1) * itemPerPage;
  const totalPages = totalItems / itemPerPage;
  var nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : 0;
  var lastPage = currentPage - 1;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={`page-item clickable ${
              lastPage === 0 ? "notdisplayble" : ""
            }`}
          >
            <a className="page-link" href="#" onClick={subtractPage}>
              Previous
            </a>
          </li>
          <li
            className={`page-item ${lastPage === 0 ? "not-displayable" : ""}`}
          >
            <a className="page-link" href="#" onClick={subtractPage}>
              {lastPage}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <li
            className={`page-item ${nextPage === 0 ? "not-displayable" : ""}`}
          >
            <a className="page-link" href="#" onClick={addPage}>
              {nextPage}
            </a>
          </li>
          <li
            className={`page-item ${nextPage === 0 ? "not-displayable" : ""}`}
          >
            <a className="page-link" href="#" onClick={addPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
