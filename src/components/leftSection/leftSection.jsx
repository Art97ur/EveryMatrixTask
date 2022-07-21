import { ICONS } from "../../const"
import "./leftSection.css"
    export const LeftSection = () =>{
        return (
            <div className="left-wrapper">
                    <div className="b-div">
                        <h2>b</h2>
                    </div>
                    
                <div className="icons">
                    {ICONS.map((el,index)=>{
                        return <i key={index} className={el.icon}></i>
                    })}
                    <p className="icon-p">#171717</p>
                </div>
                    


            </div>
        )
    }