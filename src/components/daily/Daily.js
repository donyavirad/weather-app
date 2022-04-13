import React from "react"
import Container from "../../hoc/Container"

const Daily = ()=>{
    return(
        <div className="daily">
            <Container>
                <div className="daily-container">
                    <div className="daily-title">
                        <p>پیش بینی 7 روز آینده</p>
                    </div>
                    <div className="daily-content">
                        <div className="daily-table">
                            <table></table>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Daily