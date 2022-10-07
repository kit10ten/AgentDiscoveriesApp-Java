import * as React from 'react';
import {apiGet} from '../utilities/request-helper';
// import Message from '../message';

export default class ExecutiveSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            executiveSumm: '',
            message: {}
        };

        this.executiveSumm = this.loadExecSumm(this);
    }

    loadExecSumm(){
        const url = '/executivesummary';
        try {
            apiGet(url).then(resultString => {
                this.setState({executiveSumm : resultString});
                console.log(resultString);
                
            });
        } catch (error) {
            return this.setState({ message: { message: error.message, type: 'danger' } });
        }
    }


    


    render(){
        return (
            <div className='col-md-8 col-md-offset-2'>
                <h3>Executive Summary Reports</h3>
                <div>
                    {this.state.executiveSumm}
                </div>
            </div>
        );
    }
}
