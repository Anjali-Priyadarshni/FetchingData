import bootstrap from "bootstrap"
import i1 from '../Image/i1.jpg'
import ImgData from './FetchimgData'

 export function Card (props) {
    //console.log(props.cardDetails.book_image)
    return(
    <div>
        
        <div class="card-group">
            <div className="cardprimary">
                
                <div class="card" style={{width: '300px',height:'700px' }}>  
                     <img class="card-img-top" src={props.cardDetails.book_image} alt="Card image" style={{width:'100%'}}/> 
                    <div class="card-body">
                    <h4 class="card-title">{props.cardDetails.title}</h4>
                    <h5 className="card-title5">Publish By: {props.cardDetails.publisher}</h5>
                    <p class="card-text">{props.cardDetails.book_review_link}</p>
                    <a href="#" class="btn btn-primary">Button</a>
                    </div>         
                 </div>
            </div>

         
        </div>
        
    </div>
    )
}