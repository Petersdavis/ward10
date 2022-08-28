import React from 'react';

import '../sass/platform.scss'
import housingImage from '../images/housing.jpg';
import climateImage from '../images/climate.png';
import rentImage from '../images/rentPrices.png';

export default class extends React.Component {

    render(props){
    const ref = this.props.platformRef;

    return(
        <div ref={ref} className="campaign section">
           
            <div className = "contents">  
                <h1   className="section-title"> Platform: </h1>
                <hr/> 
                <h1 className="sub-title">Affordable Housing: </h1>
                <img className="section-image" src={housingImage}/>
                <p>People all over the world see Kitchener as a great place to live. Whether for IT Jobs, a peaceful community, or education, Kitchener-Waterloo is experiencing a net-influx of people.</p>
                <p>While most newcomers are able to afford housing, their demand pushes rental prices up, and local families earning less than $100,000 a year are left struggling to keep up. In the last 5 years <a href={"https://www.zumper.com/rent-research/kitchener-on"}>rental prices have doubled!</a></p>
                <p>Clearly, we are falling behind the growth of our community and Kitchener council should act to increase the local supply of housing.</p>
                <a target="_blank" href={"https://www.zumper.com/rent-research/kitchener-on"}>
                    <img className="rent-image" src={rentImage}/>
                </a>
                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>Say "YES" to new housing:</h2>
                        <p>Many times over the last year developers have brought proposals to kitchener city council with projects that required some variances.  In many of these cases groups from neighborhoods have effectively lobbied council to reject these proposals.</p>   
                        <p>In Belmont Village, the Zehr Group proposed to build a 13-story condominium, after facing local opposition revised their proposal to 10 stories. (<a href={"https://tinyurl.com/jypbbtap"}>Read the Article</a>)</p>
                        <p>And in June-2022 council rejected a proposed development at Park & Victoria streets.  (<a href={"https://tinyurl.com/42ucy9c5"}>Read the Article</a>)</p>
                    </li>
                    <li>
                        <h2>Eliminate parking requirements for new builds located near LRT stations.</h2>
                        <p>Mandating parking requirements per unit of accomodation is an outdated policy.  The developers themselves have a better understanding of the actual demand for parking and an individual who chooses not to own a vehicle shouldn't have the expense of parking bundled into the cost of their unit.</p>
                    </li>
                    <li>
                        <h2>Support non-profit affordable housing providers.</h2>
                        <p>In Kitchener we have several non-profits that have a proven their ability record of building great affordable housing. There are a number of provinicial and federal grant programs that non-profits can access once they have secured land on which to build. The bottleneck is that they must be in possesion of the land before they can submit a proposal.</p>
                        <p>We should raise investment capital to lower this barrier to entry for vetted providers of affordable housing.</p>
                    </li>
                </ul>


            </div>

            <div className = "contents">   
                <h1 className="sub-title">Climate Preparedness: </h1>
                <img className="section-image" src={climateImage}/>
                <p>Most people now recognize that global warming is a serious threat to our planet, but many of our leaders aren't clear about what actions we should take today.</p>
                <p>Climate change is a problem of savings and investment, and this is directly related to the crisis of affordabilty and inflation.</p>
                <p>When people are living in survival mode and governments are run on deficits, there's nothing left to invest in the technology that could transform our society. If as society we can find a path to save more, we would be more secure for any future, and by spending less we would also put the breaks on inflation.</p>

                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>Increase Ridership on the GRT:</h2>
                        <p>Previous councils have invested in improving our public transit infrastructure.  It's now the responsibility of our council to encourage residents from all demographics to use it! We should launch a publicity campaign to increase ridership on routes operating below capacity, and for routes operating at or above capacity explore introducing off-peak pricing to smooth the demand. </p>
                    </li>
                    <li>
                        <h2>Better Communication on Climate Change</h2>
                        <p>Municipal government has a responsibility to counter the spread of false information on the internet.  We will do more to communicate to our community about the reality of climate change and its impacts.</p>
                    </li>
                    <li>
                        <h2>Energy security for a low-carbon economy.</h2>
                        <p>We can work with Kitchener-Wilmot Hydro to make sure that we are ahead of the curve as Canada moves towards a low-carbon economy.  In the long run an abundance of sustainable energy will make our community more competitive and a less expensive place to live.</p>
                    </li>
                </ul>

                <h1 className="sub-title">Financial Responsibility: </h1>
                <img className="section-image" src={climateImage}/>
                <p>The municipality provides services that are vital to the wellbeing of our community.  We need these services but there is also a duty to ensure that they are financed sustainably for the future.</p>
                <p>We would steward the resources of our community carefully with a focus on balancing budgets and not spending beyond our means.</p>
                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>House the homeless:</h2>
                        <p>To some extent increasing the supply of housing will make living in Kitchener more affordable.  But for the homeless encamped on Victoria St. or in Victoria Park, this change will not impact their lives today.</p>
                        <p>We should act immediately to expand emergency supportive housing for the chronically homeless. Research has shown that housing the homeless in supportive housing is less expensive than serving them on the street.</p>
                    </li>
                    <li>
                        <h2>Invest wisely for the future:</h2>
                        <p>Council must make key decisions about managing and improving the land that it owns.  We should never sell our assets to subsidize short-term spending.</p>
                    </li>
                </ul>
            </div>
        </div>

    )
};
}