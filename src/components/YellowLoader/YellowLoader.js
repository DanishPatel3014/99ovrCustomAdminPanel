import React from 'react'

export default function YellowLoader() {
    return (
        <div className="custom-loader" id='yellowLoader'>
            <div class="spinner-border text-warning" role="status">
                {/* <span class="visually-hidden">Loading...</span> */}
            </div>
        </div>
    )
}
