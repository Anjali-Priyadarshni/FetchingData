import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "./card"

export function ImgData (){
    const[imgdata,setimgdata]=useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((responce)=>{
            console.log(responce)
            setimgdata(responce.data.results.books)
        })
    },[])
    return(
        <div>
            {imgdata.length>0 && imgdata.map((imgdata)=>{
                return(
                    <div>
                        {/* <img src={imgdata.book_image}></img> */}
                        <Card cardDetails={imgdata}></Card>
                    </div>
                )
            })}

        </div>
    )
}
