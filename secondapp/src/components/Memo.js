import React from 'react'

function Memo() {
    return (
        <div>
            <h2>Helo memo component</h2>
        </div>
    )
}

// only re-render if the props value changes from parent

export default React.memo(Memo);