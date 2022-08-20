import '../sass/platform.scss'
import housingImage from '../images/housing.jpg';
import climateImage from '../images/climate.png'

export default function (){
    return(
        <div className="campaign section">
            <h1 className="section-title"> Platform: </h1>
            <hr/>
            <div className = "contents">   
                <h1 className="sub-title">Affordable Housing: </h1>
                <img className="section-image" src={housingImage}/>
                <p>People all over the world see Kitchener as a great place to live. Whether for IT Jobs, a peaceful community, or education, Kitchener-Waterloo is experiencing a net-influx of people.</p>
                <p>While most newcomers are able to afford housing, their demand pushes rental prices up, and local families earning less than $100,000 a year are left struggling to keep up. In the last 5 years <a href={"https://www.zumper.com/rent-research/kitchener-on"}>rental prices have doubled!</a></p>
                <p>Clearly, we are falling behind the growth of our community and Kitchener council should act to increase the local supply of housing.</p>

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
                        <h2>Find creative ways to support non-profit affordable housing providers.</h2>
                        <p>In Kitchener we have several non-profits that have a proven their ability record of building great affordable housing. There are a number of provinicial and federal grant programs that non-profits can access once they have secured land on which to build. The bottleneck is that they must be in possesion of the land before they can submit a proposal.</p>
                        <p>If elected, I would explore ways that the municipality could raise investment capital to lower this barrier to entry for vetted providers of affordable housing.</p>
                    </li>
                </ul>

            </div>

            <div className = "contents">   
                <h1 className="sub-title">Climate Preparedness: </h1>
                <img className="section-image" src={climateImage}/>
                <p>Today we face great uncertaintainty about our climate.  While there are still a some that deny the reality of climate change, most people recognize that global warming is an existential threat to humanity.</p>
                <p>The worst part of the situation is the feeling that we are stuck and unable to take meaningful action. The way that I understand this paralysis is that climate change is really a problem of savings and investment, and this is directly related to the issue of affordabilty.</p>
                <p>As long as people are living in survival mode and governments are being run on deficits, there's nothing left to invest in the technology that could transform our society. If as society we can find a path to save more, we would be more secure for any future, and by spending less we would also put the breaks on inflation.</p>

                <h1 className="sub-title">Our Plan: </h1>
                <ul>
                    <li>
                        <h2>Increase Ridership on the GRT:</h2>
                        <p>Previous councils have invested heavily in improving our public transit infrastructure.  It's now the responsibility of our council to encourage residents from all demographics to use it! If elected I would support a targeted publicity campaign to increase ridership on routes operating below capacity, and for routes operating at or above capacity explore introducing off-peak pricing to smooth the demand. </p>
                    </li>
                    <li>
                        <h2>Better Communication on Climate Change</h2>
                        <p>Sometimes all it takes is an encouraging word to get someone to change their behaviour.  I propose that municipal governments have a responsibility to educate the community about the reality of climate change and its potential impacts.  This kind of communication from official sources is needed to help offset the spread of misinformation on the internet.</p>
                    </li>
                    <li>
                        <h2>Making sure we are energy secure in low-carbon economy.</h2>
                        <p>I want to work with Kitchener-Wilmot Hydro to make sure that we are ahead of the curve as Canada moves towards a low-carbon economy.  In the long run an abundance of sustainable energy will make our community more competitive and a less expensive place to live.</p>
                    </li>
                </ul>

            </div>

        </div>

    )
}