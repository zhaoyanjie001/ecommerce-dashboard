import React from 'react'
import './list.scss'

const Box = props => {
    const className = {
        box: 'list',
        purple: props.purple && 'list-purple',
        fullheight: props.fullheight && 'list-fullheight'
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}

export default list