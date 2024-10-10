import React, { useEffect } from 'react'

const ImageComponent = ({data,setPageNo, loading}) => {

    useEffect(() => {
        if (loading) return;
        const observer = new IntersectionObserver ((params) => {
            console.log(params)
            if(params[0].isIntersecting){
                observer.unobserve(lastElement)
                setPageNo(pageNo => pageNo + 1)
            }
        },{threshold: 0.5})


        const lastElement = document.querySelector(".imgae-scroll:last-child")
        console.log(lastElement)
        if(!lastElement){
            return
        }

        observer.observe(lastElement)

    },[data])
  return (
    <div className='container'>
        {
            data.map((res) => {
                return (
                    <img className='imgae-scroll' src={res.download_url} alt='' key={res.id}/>
                )
            })
        }
    </div>
  )
}

export default ImageComponent