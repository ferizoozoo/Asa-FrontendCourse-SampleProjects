import React from "react";

const Pagination = (props) => {
  const { totalItems, itemPerPage } = props;
  const totalPages = totalItems / itemPerPage;
  const currentPage = 1;
  const nextPage = currentPage + 1 <= totalPages ? currentPage + 1 : 0;
  const lastPage = currentPage - 1;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
        <li className={`page-item clickable ${lastPage === 0 ? 'notdisplayble' : ''}`}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className={`page-item ${lastPage === 0 ? 'notdisplayable' : ''}`}>
            <a className="page-link" href="#">
              {lastPage}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <li className={`page-item ${nextPage === 0 ? 'notdisplayable' : ''}`}>
            <a className="page-link" href="#">
              {nextPage}
            </a>
          </li>
          <li className={`page-item ${nextPage === 0 ? 'notdisplayable' : ''}`}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
