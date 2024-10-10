import React from 'react'

const Pages = ({ pageNo, setPageNo, hasNextPage }) => {


    const previousThreePage = Array.from(
        { length: 3 },
        (_, index) => pageNo - 1 - index
    ).filter((value) => value > 0).reverse()
    const NextThreePage = Array.from(
        { length: 3 },
        (_, index) => pageNo + index
    )

    console.log('N', NextThreePage)

    const paginationArray = [...previousThreePage, ...NextThreePage]

    const handleNext = () => {
        setPageNo(pageNo + 1)
    }

    const handlPrevious = () => {
        setPageNo(pageNo - 1)
    }

    const handleSelected = (seleted) => {
        setPageNo(seleted)
    }

    return (
        <div className='pagination-container'>
            {
                pageNo > 1 ? (
                    <div className='page-btn' onClick={handlPrevious}> Previous</div>
                ) : ('')
            }
            {
                paginationArray.map((value, index) => {
                    return (
                        <div className={value == pageNo ? `page-btn active` : `page-btn`} key={index} onClick={() => handleSelected(value)}>{value}</div>
                    )
                })
            }

            {hasNextPage ? (
                <div className='page-btn' onClick={handleNext}>
                    Next
                </div>
            ) : (
                ''
            )}

        </div>
    )
}

export default Pages