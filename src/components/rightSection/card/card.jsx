import { CARD } from "../../../const"
import "./card.css"
export const Card = () =>{
    return (
        <div className="cards-wrapper">
                {CARD.map((el,index)=>{
                    return  <div key={index} className="card">
                        
                    <h2 className={el.num}>{el.number}</h2>
                        <div className= 'card-text'>
                        <i className={el.icon}></i>
                        <p className="card-text">{el.text}</p>
                        </div>
                    </div>
                })}
               
            </div>
    )
}