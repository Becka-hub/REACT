import React, { useState } from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, nextPage, prevPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }
    let numberPage = 3;
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" onClick={() => prevPage()} href="#">Previous</a>
                </li>
                {pageNumber.map((num) =>
                    num <= numberPage ? (
                        <li className="page-item" key={num}>
                            <a href="#" onClick={() => paginate(num)} className="page-link">{num}</a>
                        </li>
                    ) : null)}
                <li className="page-item">
                    <a className="page-link" onClick={() => nextPage()} href="#">...{totalPosts}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => nextPage()} href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
