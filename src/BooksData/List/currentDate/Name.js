import axios from "axios"
import { useState,useEffect } from "react"
export function LatestBook(){
    const[latBook,setLatBook]=useState([])
    const[crrection,setCorrection]=useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((responce)=>{
            console.log(responce)
            setLatBook(responce.data.results.books)
            setCorrection(responce.data.results)
        })
    },[])
    return(
        <div>
            {latBook.map((fetchbook)=>{
                return(
                    <div>
                       <img src= {fetchbook.book_image}></img><br/>
                       BookRank:{fetchbook.rank}<br/>
                       BookTitle:{fetchbook.title}<br/>
                       {fetchbook.publisher}<br/>
                       {crrection.updated}
                       
                       
                    </div>
                )
            })}
            
        </div>
    )
}