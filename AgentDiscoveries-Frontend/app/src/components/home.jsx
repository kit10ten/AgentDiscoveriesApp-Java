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
                    <p>Bring to the table win-win survival strategies to ensure proactive domination.
                        At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                        User generated content in real-time will have multiple touchpoints for offshoring.
                    </p>
                    <p>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews.
                        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                    </p>
                </main>
                
                
                    
                {renderAuthButton()}
               
                

            </div>
            
        );
        
    }
}


