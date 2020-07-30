import React, { Component } from 'react';

export default class ApplyTender extends Component{
    state = {
        title:"",
        organizationName:"",
        tenderCategory:"",
        startDate:"",
        lastDate:"",
        validity:"",
        location:"",
        tenderDescription:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render()
    {
        const styles = {
            border:"1px solid #333",
            borderRadius:"5px",
            padding:"20px 30px",
            marginTop:"30px",
            backgroundColor:"#eee"
        }

    return (
        <div className="row">
            <form style={styles} className="col-8 col-md-6 offset-2 offset-md-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="title">Tender Name</label>
                    <input type="text" className="form-control" name="title" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="organizationName">Organization Name</label>
                    <input type="text" className="form-control" name="organizationName" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="tendorCategory">Tender Category</label>
                    <select class="form-control">
                        <option>Category A</option>
                        <option>Category B</option>
                        <option>Category C</option>
                        <option>Category D</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="bid-date">Tender Dates</label>
                    <div className="form-row">
                        <input type="text" name="startDate" className="form-control col-4" onChange={this.handleChange} placeholder="Start Date"/>
                        <input type="text" name="lastDate" className="form-control col-4" onChange={this.handleChange} placeholder="Last Date"/>
                        <input type="text" name="validity" className="form-control col-4" onChange={this.handleChange} placeholder="Validity"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="location">Location</label>
                    <select class="form-control" name="location">
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Banglore</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="tenderDescription">Tender Description</label>
                    <input type="text-area" name="tenderDescription" onChange={this.handleChange} className="form-control" rows="4"/>
                </div>
                <button type="submit" className="btn btn-primary">Apply</button>
            </form>
        </div>
    );
    }
}



// {
// 	"fcn":"createTender",
// 	"peers":["peer0.bidder.tendersys.com","peer0.gov.tendersys.com"],
// 	"chaincodeName":"tendersys",
// 	"channelName":"bidChannel",
// 	"args":[
// 		"bidResultDate": "Wed Oct 07 2011 20:18:00 GMT+0530",
// 		"bidSubmissionEndDate": "Wed Oct 08 2011 20:18:00 GMT+0530",
// 		"bidSubmissionStartDate": "Wed Oct 06 2011 20:18:00 GMT+0530",
// 		"bidValidity": "180_Days",
// 		"id": "2",
// 		"location": "Mumbai",
// 		"orgChain": "IITB",
// 		"periodOfWork": "365 Days",
// 		"productCategory": "Man Power Supply",
// 		"publishDate": "Wed Oct 05 2011 20:18:00 GMT+0530",
// 		"tenderRef": "tender",
// 		"title": "Digital India",
// 		"winnerBidder": "",
// 		"workDescription": "Something related to tender 2",
	
// 	]
// }