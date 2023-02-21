import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <>
      <div className="container">
        {props.dataToDisplay.length > 0 ? (
          <>
          {
            props.dataToDisplay.map((item, i) => {
              return (
                <>
                  <div>
                    <img
                      src={URL.createObjectURL(item.attachment)}
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                    />
                    <h2>Address :{item.address}</h2>
                    <h3>Phone Number : {item.phone_number}</h3>
                    <p>Type : {item.type}</p>
                  </div>
                </>
              );
            })}
    
          </>
        ) : (
          <div>No data found, Make entries!</div>
        )
    }
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    dataToDisplay: state.dataToDisplay,
  };
}

export default connect(mapStateToProps)(Home);
