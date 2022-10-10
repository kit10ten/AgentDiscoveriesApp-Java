import * as React from 'react';

//import { Redirect } from 'react-router-dom';

import {Link} from 'react-router-dom';
import {isLoggedIn} from './utilities/user-helper';
import mapboxgl from 'mapbox-gl';
import '../sass/styles.scss';


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        const mapContainer = React.useRef(null);
        const map = React.useRef(null);
        const [longitude, setLongitude] = React.useState(-0.12590142494217288);
        const [latitude, setLatitude] = React.useState(51.49412512139892);
        const [zoom, setZoom] = React.useState(9);

        React.useEffect(() => {
            if(map.current) return;
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [latitude, longitude],
                zoom: zoom
            });
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        React.useEffect(() => {
            if(!map.current) return;
            map.current.on('move', () => {
                setLatitude(map.current.getCenter().longitude.toFixed(4));
                setLongitude(map.current.getCenter().latitude.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });
        });

        this.state = {
            isLoggedIn: isLoggedIn(),
            
        };
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
                        <div className='map-container' ref={mapContainer}/>
                    </div>
                </main>
                {renderAuthButton()}
            </div>
            
        );
        
    }
}


