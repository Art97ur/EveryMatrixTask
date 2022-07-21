import "./medias.css"

export const Medias = () =>{
    return(
        <div className="medias-wrapper">
        <div className="medias">
          <div className="med">
            <p>Medias States</p>
            <p>Last week</p>
          </div>
          <div className="states">
            <p>60</p>
            <p>40</p>
            <p>20</p>
            <p>0</p>
            <p>60</p>
            <div className="click">
              <div className="clickpage">
                <div className="cl"></div>
                <p>click</p>
                <div className="view"></div>
                <p>Page View</p>
                <div className="sign"></div>
                <p>Sign ups</p>
              </div>
            </div>
          </div>

        </div>
        <div className="active">
              <div className="act">50</div>
          </div>

          <div className="geograpick">
              <div className="data">
              <p>Geograpic Data</p>
            <p>Last Month</p>
              </div>
              <div className="data">
              <p>1. United States</p>
            <p>200</p>
              </div>
              <div className="data">
              <p>2. China</p>
            <p>65</p>
              </div>
              <div className="data">
              <p>3. Umited Kingdom</p>
            <p>22</p>
              </div>
          </div>
      </div> 
    )
}