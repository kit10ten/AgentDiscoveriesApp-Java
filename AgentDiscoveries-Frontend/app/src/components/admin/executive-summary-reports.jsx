import * as React from 'react';
import {Panel} from 'react-bootstrap';

export default class ExecutiveSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfDays: '',
            locationStatusReports: '',
            regionSummaryReports: '',
            importantReports: '',
        };
    }


    render(){
        return (
            <div className='col-md-8 col-md-offset-2'>
                <h3>Executive Summary Reports</h3>
            </div>
        );
    }
}
