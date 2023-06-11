import React from 'react'

export const Pagination = () => {
  return (
    <>
        <div className="paginationBox" id="paginationBox">
            <div className="pagination" id="pagination">
            <a href="#LOP" className="pbtn" style={{color: "darkgrey"}}>Prev</a>
            <a className="pbtn pactive" href="#LOP">1</a>
            <a href="#LOP" className="pbtn">2</a>
            <a href="#LOP" className="pbtn">3</a>
            <a href="#LOP" className="pbtn">Next</a>
            </div>
        </div>
    </>
  )
}
