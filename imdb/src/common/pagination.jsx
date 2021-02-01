import React from "react";

const Pagination = (props) => {
  const { items, selectedItem, itemPerPage } = props;
  const totalPages = items / itemPerPage;
  const thisPage = selectedItem / itemPerPage;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
