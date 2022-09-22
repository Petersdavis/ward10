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
                <p>Our city is growing rapidly. There is no wonder why - people move to Kitchener for our peaceful lifestyle and for the many opportunities in the local technology sector. However, increased demand for housing has pushed rental prices up–in the last 5 years, <a href={"https://www.zumper.com/rent-research/kitchener-on"}>the cost of a 1-bedroom apartment has doubled!</a></p>
                <p>As it stands, working individuals and families are at risk of homelessness due to lack of affordable housing. Furthermore, as our neighbours spend more and more of their household budgets on housing, they have less money to experience all that Kitchener’s businesses have to offer. In this housing climate, everybody suffers.</p>
                <p>Together with a progressive plan to increase the supply of housing in the city, we can ensure that there is enough housing for the whole community.</p>
                <a target="_blank" href={"https://www.zumper.com/rent-research/kitchener-on"}>
                    <img className="rent-image" src={rentImage}/>
                </a>
                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>Say "YES" to new housing:</h2>
                        <p>Many times over the last year, developers have brought proposals for projects to Kitchener city council.  In many of these cases, neighbourhood groups have lobbied council to reject these proposals.</p>   
                        <p>In Belmont Village, the Zehr Group proposed to build a 13-story condominium; after facing local opposition, they revised their proposal to 10 stories. (<a href={"https://tinyurl.com/jypbbtap"}>Read the Article</a>)</p>
                        <p>In June 2022 council rejected a proposed development at Park & Victoria streets.  (<a href={"https://tinyurl.com/42ucy9c5"}>Read the Article</a>)</p>
                        <p>These high-density developments offer a much-needed volume of units and are appropriate along major transit corridors.  We should also look for a form of intensification more appropriate to our suburban communities.  Duplexes, triplexes, townhouses and  low-rise apartment buildings are all forms of development that can preserve the character of our downtown neighbourhoods while providing much needed density.</p>
                    </li>
                    <li>
                        <h2>Eliminate parking requirements for new builds located near LRT stations.</h2>
                        <p>Mandating parking requirements per unit of accommodation is an outdated policy.  The developers themselves have a better understanding of the actual demand for parking. An individual who chooses not to own a vehicle should not have the expense of parking bundled into the cost of their unit.</p>
                    </li>
                    <li>
                        <h2>Support non-profit affordable housing providers.</h2>
                        <p>The communities built around affordable and supportive housing are essential for reintegrating chronically homeless people into safe housing and are the only way for us to solve homelessness in the long-term.  The current strategy of pushing people out of overcrowded shelters into market-rent accommodation is unsustainable, can lead to property damage, and is ultimately more costly to the region.</p>
                        <p>In Kitchener, we have several non-profits with a proven record of building affordable and supportive housing. Once they have secured land to build upon, there are a number of provincial and federal affordable housing grant programs that these nonprofits can access. City council should work with these nonprofits to help ensure they can continue to scale their operations.</p>
                    </li>
                </ul>
            </div>

            <div className = "contents">   
                <h1 className="sub-title">Climate Preparedness: </h1>
                <img className="section-image" src={climateImage}/>
                <p>Most people now recognize that global warming is a serious threat to our planet, but our community leaders still aren't clear on how we should take action today.  When people are living in survival-mode and governments are running on deficits, there's nothing left to invest in the technology that could transform our society. If as society we can learn to save more, we would have less financial stress and could begin to think about investing in a better future.</p>

                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>Increase Ridership on the GRT:</h2>
                        <p>Previous councils have invested in improving our public transit infrastructure.  It's now the responsibility of our council to encourage residents from all demographics to use it! We should launch a publicity campaign to increase ridership on routes operating below capacity, and for routes operating at or above capacity explore introducing off-peak pricing to smooth the demand. </p>
                    </li>
                    <li>
                        <h2>Better Communication on Climate Change</h2>
                        <p>Municipal government has a responsibility to counter the spread of false information on the internet. I will lead the council to more proactively  communicate about the reality of climate change and its impacts on our community.</p>
                    </li>
                    <li>
                        <h2>Energy security for a low-carbon economy.</h2>
                        <p>As Canada moves toward a low-carbon economy, we can work with Kitchener-Wilmot Hydro to make sure that we are ahead of the curve as Canada. In the long-run, an abundance of sustainable energy will make our community more competitive and a less expensive place to live.</p>
                    </li>
                </ul>

                <h1 className="sub-title">Financial Responsibility: </h1>
                <img className="section-image" src={climateImage}/>
                <p>Global supply chain issues, the war in Ukraine, and the lingering pandemic are having a profound impact on our economy.  Businesses still recovering from Covid-19 lockdowns are now struggling with inflation nearing 8%.  During this period of high inflation, we need our municipal government to exercise fiscal restraint.  The reality is that the municipal council can’t impact the price of canola oil - but when we choose to launch major infrastructure projects like the 93$ million recreational facility in Schlegel Park, we are putting the city in direct competition with other local developments for scarce local resources.  This kind of development is likely to increase costs across the region making it even harder for Kitchener residents to achieve their financial goals.</p>
                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>House the homeless:</h2>
                        <p>Solving homelessness in the region would yield immediate financial benefit for our community.  We need an immediate investment from the region in safe, secure emergency shelters for the people living in tent-cities on Victoria St. and in Victoria Park.</p>
                        <p>We also need an adequate supply of affordable and supportive housing so that people transitioning out of homelessness are not placed into inappropriate and unsustainable market rent accommodations.  By both investing in supportive and affordable housing and increasing the supply of market housing, it is possible that everyone can have a place to live in our city.</p>
                    </li>
                    <li>
                        <h2>Protect our green space and trails:</h2>
                        <p>We can intensify our downtown neighbourhoods without sacrificing their unique character and livability.  As a city, we should never sell our assets to subsidise short-term spending - the green spaces and trails that we have in the downtown core must be protected.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};
}