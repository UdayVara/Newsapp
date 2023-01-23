import React from 'react'

export default  function loader() {
 
    return (
      <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary mt-5 my-5" role="status" >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )

}

