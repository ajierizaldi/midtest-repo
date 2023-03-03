import React from "react"

class Card extends React.Component {
    render() {
        return (
            <div class="p-2">
                <div class="card">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.props.cover} className="img rounded"
                                style={{ height: "300px", width: "350px" }} alt="images" />
                        </div>
                        <div className="col-md-6">
                            <div className="mt-5">
                                <h1>{this.props.title}</h1>
                                <div style={{ marginTop: '20px' }}>
                                    <span className="origin-left text-black">
                                        Price : $ {this.props.price}
                                    </span>
                                </div>
                                <button className="btn btn-primary mt-4"
                                    onClick={this.props.onDetail}>
                                    Preview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Card;