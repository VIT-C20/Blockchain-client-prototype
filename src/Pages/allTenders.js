import React, { Component } from 'react';
import TenderCard from '../Components/tenderCard';
import axios from 'axios';


export default class AllTenders extends Component{
  state = {
    tenders: [
      {
        title:"Tender A",
        description:"This is sample dscription related to tender A",
      },
      {
        title:"TEnder B",
        description:"This is a sample description related to Tender B"
      }
    ],
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
      // this.setState({
      //   tenders:res.data,
      // })
    }).catch(err => {

      console.log(err.message);
    });
  }

  render(){
    const all_tenders  = this.state.tenders.map((tender) => {
      return <TenderCard title={tender.title} description={tender.description}/>
    });

    return (
      <div className="row offset-md-1">
        {all_tenders}
      </div>
    );
  }
};

