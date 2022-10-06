import React from 'react';
import {Button} from 'react-bootstrap';
import Link from 'react-router-dom/Link';

export default class Entity extends React.Component {
    constructor (props) {
        super(props);

        // Assume that the first JSON property is the ID property
        this.id = Object.values(props.entity)[0];
    }

    render() {
        return (
            <tr style={{minWidth: '400px'}} key={this.id}>
                {this.getEntityRow()}
                <td key='edit'>
                    {this.getEditButton()}
                </td>
            </tr>
        );
    }
    
    getEntityRow() {
        const possibleColumns = ['locationId','siteName','location','timeZone', 'regionId','latitude','longitude'];
        return possibleColumns.map(columnName =>
            <td key={columnName}>{this.props.entity[columnName] ? this.props.entity[columnName].toString() : '-'}</td>);
    }
    

    getEditButton() {
        return (
            <Link to={`/admin/${this.props.type}/edit/${this.id}`}>
                <Button type='button'>Edit</Button>
            </Link>
        );
    }
}
