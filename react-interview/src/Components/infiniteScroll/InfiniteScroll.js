import React, { useEffect, useState } from 'react'
import ImageComponent from './ImageComponent'

const InfiniteScroll = () => {
    const [data,setData] = useState([])
    const [pageNo,setPageNo] = useState(1)
    const  [loading,setLoading] = useState(false)
    const  [error,setError] = useState('')

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
            const data = await res.json()
            setData((olddata) => [...olddata, ...data])
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }

    useEffect (() => {
         fetchData()
    },[pageNo])

  return (
    <div>
        <ImageComponent data={data} setPageNo ={setPageNo} loading={loading}/>
        {loading && <p className='loading'>.........loading</p>}
        {error && <p>......Something went wrong</p>}
    </div>
  )
}

export default InfiniteScroll