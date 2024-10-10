import React, { useEffect, useState } from 'react'
import Pages from './Pages'

const Pagination = () => {
    const [pageNo, setPageNo] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasNextPage, setHasNextPage] = useState(true);

    const fetchdata = async () => {
        try {
            setLoading(true)
            let res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
            let data = await res.json()
            setData(data)
            setLoading(false)
            // If fetched data length is less than 5, that means no more pages are left
            setHasNextPage(data.length === 5);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchdata()
    }, [pageNo])
    return (
        <div className='container'>
            <div className='post_container'>
                {loading && <p>......loading</p>}
                {error && <p>{error}</p>}
                {
                    data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <img src={item.download_url} alt="" key={index} />
                            )
                        })
                    ) : null
                }
                {
                    data.length > 0 ? (
                        <Pages pageNo={pageNo} setPageNo={setPageNo} hasNextPage={hasNextPage} />
                    ) : ""
                }

            </div>
        </div>
    )
}

export default Pagination