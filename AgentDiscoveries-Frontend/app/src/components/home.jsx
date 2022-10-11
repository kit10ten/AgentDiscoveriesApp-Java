// import * as React from 'react';
import React, {createRef} from 'react';
//import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {isLoggedIn} from './utilities/user-helper';
import mapboxgl from '!mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
//import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

//mapboxgl.workerClass = MapboxWorker;

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlZXNlY2FrZTExMiIsImEiOiJjbDkybjdkZHUxaGwwM3ZwMmgzOTlmY2k4In0.H89sgzAyt5sXyGYx5eiP_g';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: isLoggedIn(),
            latitude: 51.49412512139892,
            longitude: -0.12590142494217288,
            zoom: 9,
           
        };
        this.mapContainer = React.createRef();
        console.log(this.state);

        const mapContainer = createRef();
        console.log(mapContainer);
        this.setState({
            longitude: -0.12590142494217288,
            latitude: 51.49412512139892,
            zoom: 9
        });
 
    }

    componentDidMount() {
        const {longitude, latitude, zoom} = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            // style: 'mapbox://styles/cheesecake112/cl92nc8dw009u14nrza9xc1wm',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [longitude, latitude],
            zoom: zoom
        });
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
            this.setState({
                longitude: this.state.map.getCenter().longitude.toFixed(4),
                latitude: this.state.map.getCenter().latitude.toFixed(4),
                zoom: this.state.map.getZoom().toFixed(2)
            });
        });    
    }
    
    render() {
        const renderAuthButton = () => {
            if (!isLoggedIn()) {
                return <Link to="/login"><button type="button" className="btn btn-primary" >Login</button></Link>;
            }
        };
        return (
            <div className="container-sm f" id="homepage" >
                <h1  className="placeholder-wave fs-1">Home Page</h1>
                <h2 className="fs-2">About </h2>
                <main className="fs-3">
                    <b>
                        IF YOU ARE NOT ASSOCIATED WITH THE WORLDS GREATEST SECRET AGENTS, LEAVE IMMEDIETELY,
                        NO UNAUTHORISED ACCESS ALLOWED
                    </b>
                    <p></p>
                    <p>
                        This is the home of the worlds greatest secret agents! AEAOA (American Express Association Of Agents) welcome!
                    </p>
                    <p>
                        You will find all the necessary facilities to complete your daily tasks so you can get paid at the end of the month! 
                        If you require immediete assistance, please email our head agent, rogerthebestagent@aeaoa.softwire.agent.com
                    </p>
                    <div>
                        <h1>Map</h1>
                        <div ref={this.mapContainer} className='mapContainer'/>
                    </div>  
                </main>
                {renderAuthButton()}
            </div>
        );    
    }
}


