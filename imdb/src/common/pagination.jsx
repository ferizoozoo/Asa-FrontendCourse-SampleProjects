import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      nextPage: 2,
      lastPage: 0,
      totalPages: Math.ceil(this.props.totalItems / this.props.itemPerPage)
    }
  }

    clickPage(page) {
      this.setState({
        currentPage: page,
        nextPage: page + 1 <= this.state.totalPages ? page + 1 : 0,
        lastPage: page - 1 >= 1 ? page - 1 : 0
      });
      this.props.onPageClick(page);
    }

    render() {
      const { nextPage, currentPage, lastPage } = this.state;
      return (
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
            <li className={`page-item ${lastPage === 0 ? 'disabled' : ''}`}>
                <a className="page-link" href="#" onClick={() => this.clickPage(lastPage)}>
                  Previous
                </a>
              </li>
              <li className={`page-item ${lastPage === 0 ? 'notdisplayable' : ''}`}>
                <a className="page-link" href="#" onClick={() => this.clickPage(lastPage)}>
                  {lastPage}
                </a>
              </li>
              <li className="page-item active disabled">
                <a className="page-link" href="#">
                  {currentPage}
                </a>
              </li>
              <li className={`page-item ${nextPage === 0 ? 'notdisplayable' : ''}`}>
                <a className="page-link" href="#" onClick={() => this.clickPage(nextPage)}>
                  {nextPage}
                </a>
              </li>
              <li className={`page-item ${nextPage === 0 ? 'disabled' : ''}`}>
                <a className="page-link" href="#" onClick={() => this.clickPage(nextPage)}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }

export default Pagination;
