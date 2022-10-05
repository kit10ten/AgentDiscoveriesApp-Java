import * as React from 'react';

import { reactComponent as Bond } from '../../static/james-bond-007.svg';

//import { Redirect } from 'react-router-dom';

export default class Home extends React.Component {




    render() {



        return (
            <div>
                <h1>Home Page</h1>
                <Bond />

                <h2>About </h2>
                <main>
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

            </div>
        );

        // Get the canvas node and the drawing context


    }

}



