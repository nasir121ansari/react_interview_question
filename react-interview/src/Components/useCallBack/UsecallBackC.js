import React, { memo } from 'react'

const UsecallBackC = () => {
    console.log('component child callled')
    return (
        <div>UsecallBackC</div>
    )
}

export default memo(UsecallBackC)