import * as React from 'react';
import {Panel} from 'react-bootstrap';

export default class SearchResult extends React.Component {
    render() {
        return (
            <div className='results'>
                {this.getResultsHeader(this.props.results)}
                {this.renderResults(this.props.results)}
            </div>
        );
    }

    renderResults(results) {
        return results.map((result, index) => {
            return (
                <Panel key={index}>
                    <Panel.Heading>
                        Result - {Object.keys(result).map(key => {
                            if (key == 'reportTitle'){
                                if (result[key] != ''){
                                    return 'Report Title | '+result[key];
                                }
                            }
                        })}
                    </Panel.Heading>
                    <Panel.Body>{this.renderResultBody(result)}</Panel.Body>
                    <Panel.Footer><button onClick={() => alert('Your PDF is in another castle')}>Export to PDF</button></Panel.Footer>
                </Panel>
            );
        });
    }

    renderResultBody(result) {
        return Object.keys(result).map(key => {
            if (result[key] == null || result[key] == ''){return null;}
            if (key == 'reportTitle'){return null;}
            return <p key={key} id={key}>{`${key}: ${result[key]}`}</p>;
        });
    }

    getResultsHeader(results) {
        return results.length > 0
            ? (results.length === 1
                ? <h3>{`${results.length} result`}</h3>
                : <h3>{`${results.length} results`}</h3>)
            : '';
    }
}
