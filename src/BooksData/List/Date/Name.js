import axios from "axios"
import { useState,useEffect } from "react"
export function BookImage () {
    const[bookData,setbookData]=useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((responce)=>{
            console.log(responce)
            setbookData(responce.data.results.books)
        })
    },[])
    return(
        <div>
            {bookData.map((fetchData)=>{
                return(
                    <div>
                        <img src={fetchData.book_image}></img>
                    </div>
                )
            })}
        </div>

        
    )
}
