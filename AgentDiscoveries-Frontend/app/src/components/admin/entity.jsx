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
            <tr key={this.id}>
                {this.getEntityRow()}
                <td key='edit'>
                    {this.getEditButton()}
                </td>
            </tr>
        );
    }

    getPossibleColumnsForType(tableType){
        switch(tableType){
            case 'locations':
                return ['locationId','siteName','location','timeZone', 'regionId','latitude','longitude','name'];
            case 'regions':
                return ['regionId', 'name'];
            case 'users':
                return ['userId', 'username', 'admin'];
        }
    }

    getEntityRow() {
        const possibleColumns = this.getPossibleColumnsForType(this.props.type);
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
