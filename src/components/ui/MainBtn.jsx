import React from 'react'
import { Link } from 'react-router-dom'

export default function MainBtn({ value, href, onClick, showIcon = true, className = "", loading }) {
    return <>

        <>
            {href ? (
                <Link to={href} className={`main-btn ${className}`}>
                    {value}
                    {showIcon && <i className="fa-solid fa-chevron-left"></i>}
                    {loading && <i className="fa-solid fa-spinner fa-spin"></i>}
                </Link>
            ) : (
                <button onClick={onClick} className={`main-btn ${className}`}>
                    {value}
                    {showIcon && <i className="fa-solid fa-chevron-left"></i>}
                    {loading && <i className="fa-solid fa-spinner fa-spin"></i>}
                </button>
            )}
        </>
    </>
}
