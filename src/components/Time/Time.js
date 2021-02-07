import React from 'react'

export function Time(props) {
    let ampm = (new Date(props.time).getHours()) >= 12 ? 'pm' : 'am'
    let updatedTime = new Date(props.time).toString().split(' ')
    updatedTime.splice(updatedTime.length - 4, updatedTime.length - 1);
    updatedTime.shift()
    let digitalTime = updatedTime.pop().split(":")
    digitalTime.pop()
    digitalTime = digitalTime.join(':')
    return (
        <div>
            {updatedTime.join(', ') + ', ' + digitalTime + ' ' + ampm}
        </div>
    )
}

