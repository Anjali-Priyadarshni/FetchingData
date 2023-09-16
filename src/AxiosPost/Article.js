import axios from "axios";
import { useState,useEffect } from "react";

function ArticleSearch(){
    const[article,setArticle]=useState([])

    useEffect(()=>{
        axios.post("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=hZDmCFWeM7QC4iJej0UPAE29S3crLIqP",article)
        .then((responce)=>{
            console.log(responce)
        })
    },[])

    return(
        <div>
            Anjali
        </div>
    )
}
export default ArticleSearch;