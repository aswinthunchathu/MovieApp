import React from 'react';

import './index.css';

const Spinner = () => {
    return (
        <div className="mt-5 text-center w-100">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      )
}

export default Spinner;