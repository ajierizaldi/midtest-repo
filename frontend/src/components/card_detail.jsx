import React from "react"

class CardDetail extends React.Component {
    render() {
        return (
            <>
                <h3 className="fw-semibold pt-lg-5 text-2xl mx-4 mb-lg-2" align="center">{this.props.title}</h3 >
                <div className="card-body row mb-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.props.cover} className="img rounded"
                                style={{ height: "300px", width: "350px" }} alt="images" />
                        </div>
                        <div className="col-md-6">
                            <div className="mt-5">
                                <h6 className="mt-2">
                                    {this.props.description}
                                </h6>
                                <div style={{ marginTop: '20px' }}>
                                    <span className="origin-left text-black">
                                        Price : {this.props.price}
                                    </span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span className="origin-left text-black">
                                        Stock : {this.props.stock}
                                    </span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span className="origin-left text-black">
                                        Rating : {this.props.rating}
                                    </span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span className="origin-left text-black">
                                        Brand : {this.props.brand}
                                    </span>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <span className="origin-left text-black">
                                        Category : {this.props.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CardDetail;