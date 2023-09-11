import axios from "axios"
import { useEffect, useState } from "react"

export function BookName(){
    const[name,setName]=useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP")
        .then((responce)=>{
            console.log(responce);
            setName(responce.data.results)
        },)
        
    },[])
    return(
        <div>
            {name.map((fetchName)=>{
                return(
                    <div>
                        ObjDetails:<br/>
                        {fetchName.list_name}<br/>
                        {fetchName.updated}<br/>
                        {fetchName.newest_published_date}
                    </div>
                )
            })}
        </div>
    )
}