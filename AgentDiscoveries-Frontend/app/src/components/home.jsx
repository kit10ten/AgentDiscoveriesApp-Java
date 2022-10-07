import * as React from 'react';

//import { Redirect } from 'react-router-dom';

import {Link} from 'react-router-dom';
import {isLoggedIn} from './utilities/user-helper';


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: isLoggedIn(),
            
            
        };
        
        

        
    }

   
    
    render() {

        // const handleLogOut = () => {
            
        //     //added to fix navbar reload so happening automatic PJB
            
        //     clearUserInfo();
        //     window.location.reload(false);
            
        // };

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
                </main>
                
                
                    
                {renderAuthButton()}
               
                

            </div>
            
        );
        
    }
}


