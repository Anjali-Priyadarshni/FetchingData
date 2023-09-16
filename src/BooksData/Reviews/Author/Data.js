import axios from "axios"
import { useEffect, useState } from "react"

export function Reviews(){
    const[review,setReview]=useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/reviews.json?author=Michelle+Obama&api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((responce)=>{
            console.log(responce)
            setReview(responce.data.results)
        })
    },[])
    return(
        <div>
            {review.book_author}
            {review.book_title}
        </div>
    )
}