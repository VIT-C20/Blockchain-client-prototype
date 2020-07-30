import React, { Component } from 'react';
import TenderCard from '../Components/tenderCard';
import axios from 'axios';

export default class AllTenders extends Component{
  state = {
    tenders: [],
  }

  
  componentDidMount(){
    // const params = {
    //   args:'["TENDER0"]',
    //   peer:"peer0.gov.tendersys.com",
    //   fcn:"queryAllTenders"
    // }
  
    axios.get('http://localhost:4000/channels/bidchannel/chaincodes/tendersys?args=["TENDER0"]&peer=peer0.gov.tendersys.com&fcn=queryAllTenders',{
      headers:{
        Authorization: localStorage.FBIdToken,
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        tenders:res.data,
      })
    }).catch(err => {
      console.log(err.message);
    });
  }

  render(){
    const all_tenders = this.state.tenders.map((tender) => {
      return <TenderCard title={tender.Record.orgChain} description={tender.Record.workDescription}/>
    });

    return (
      <div className="row offset-md-1">
        {all_tenders}
      </div>
    );
  }
};


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