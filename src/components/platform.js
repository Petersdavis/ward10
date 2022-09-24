import React from 'react';

import '../sass/platform.scss'
import housingImage from '../images/housing.jpg';
import climateImage from '../images/climate.png';
import financeImage from '../images/finance.png';
import rentImage from '../images/rentPrices.png';
import indigenousImage from '../images/indigenous.png'

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
                <p>Council has a responsibility to ensure that as the city grows there is enough housing for all residents.  Over the last five years demand for housing has pushed rental prices up, <a href={"https://www.zumper.com/rent-research/kitchener-on"}>the cost of a 1-bedroom apartment has doubled!</a></p>
                <p>Working families and individuals on fixed income are at a risk of homelessness if they lose their current accomodation.</p>
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
            </div>
            <div className = "contents">
                <h1 className="sub-title">Fiscal Responsibility: </h1>
                <img className="section-image" src={financeImage}/>
                <p>Global supply chain issues, the war in Ukraine, and the lingering pandemic are having a profound impact on our economy.  Businesses still recovering from Covid-19 lockdowns are now struggling with inflation nearing 8%.  During this period of high inflation, we need our municipal government to exercise fiscal restraint.  Municipal council can’t change the price of canola oil - but when we choose to launch major infrastructure projects like the 93$ million recreational facility in Schlegel Park, we are putting the city in direct competition with other local developments for scarce local resources.  This kind of development is likely to increase costs across the region making it even harder for Kitchener residents to achieve their financial goals.</p>
            </div>

            <div className = "contents">
                <h1 className="sub-title">Indigenous Relations: </h1>
                <img className="section-image" src={indigenousImage}/>
                <p>Peter is optimistic about the future of indigenous/non-indigenous relations in our community and our country.  The Truth and Reconciliation Commission began a process which continues today whereby all Canadians can begin to have a shared understanding of our past.</p>
                <p>While there is value in truth, it’s important to recognize that truth in and of itself is not reconciliation.  The prerequisite for reconciliation is for non-indigenous Canadians to recognize that its in the interest of all Canadians to promote strong indigenous communities in our midst. </p>
                <p>Peter is prepared to collaborate with indigenous representatives to empower them to achieve their vision of a permanent space for indigenous life and culture in the Region of Waterloo.</p>
                <p>As a gesture of Peter’s intention to listen to and to collaborate with indigenous leaders, our campaign has made a small financial contribution to the <a href={"https://aocan.org/"}>Anishinabeg Outreach Center</a> located in Kitchener.</p>
            </div>
        </div>
    )
};
}