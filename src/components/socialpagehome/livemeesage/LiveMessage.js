import React from 'react'
import IconMessage  from './IconMessage'
function LiveMessage() {
    return (
        <div className="container  mx-4 mb-3 p-2">
            <div className="d-flex ms-2 mt-3">
             <IconMessage/>
              <p className="fw-bold mx-4">
                Live Message
              </p>
            </div>

        </div>
    )
}

export default LiveMessage
