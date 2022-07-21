import "./input.css"

export const Input = () =>{
    return (
        <div className="input-wrapper">
                <input type="text" className="input" placeholder="Dashboard" />
                <button className="btn"> <i className="bx bxs-heart"></i> ADD THIS PAGE TO FAVORITES</button>
            </div>
    )
}