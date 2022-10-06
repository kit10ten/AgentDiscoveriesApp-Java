import * as React from 'react';

import NavigationBar from './nav';
import background from '../../static/cool-background.png';

export default class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                

                <div className='contentContainer' style={{ backgroundImage: `url(${background})` }}>
                    <NavigationBar />
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
