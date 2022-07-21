import { TABLE, TABLE_TITLE } from "../../../const";
import "./footer.css"
export const Footer = () =>{
    return(
        <footer>
        {TABLE.map((el, index) => {
          return (
            <div key={index} className="table">
              <div className="table-header">
                <b>ID</b>
                <b>Username</b>
                <b>Profit($)</b>
                <b>Commission($)</b>
                <b>View</b>
              </div>
              {TABLE_TITLE.map((el, index) => {
                return (
                  <div key={index} className="table-title">
                    <p>{el.id}</p>
                    <p>{el.username}</p>
                    <p>{el.profit}</p>
                    <p>{el.commission}</p>
                    <i className="bx bx-menu"></i>
                  </div>
                );
              })}
            </div>
          );
        })}
      </footer>
    )
}