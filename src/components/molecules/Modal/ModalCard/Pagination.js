import React from 'react'

import { ButtonPagination, } from '../../../atoms/Buttons/ButtonPagination/style'

const Pagination = ({ pages, setCurrentPages, currentPage }) => {

    return (
        <div>
            {Array.from(Array(pages), (produto, index) => {
                return <ButtonPagination
                    key={index}
                    style={index === currentPage ? { backgroundColor: "#8FBC8F"} : null}
                    value={index}
                    onClick={(e) =>
                        setCurrentPages(Number(e.target.value))}>
                    {index + 1}
                </ButtonPagination>
            })}
        </div>
    )
}

export default Pagination
