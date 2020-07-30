import React from 'react';
import {Card, CardText, CardTitle, Button} from 'reactstrap';

const styles = {
    boxSizing:"border-box",
    
    
}

export default function TenderCard(props){
    const {title,description} = props;

    return(
        
        <div className="col-xs-3 col-md-5 mt-5"  style={styles}>
            <Card body>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <Button>More Details</Button>
            </Card>
        </div>
    );
}