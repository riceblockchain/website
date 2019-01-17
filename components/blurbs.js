import Grid from "hedron";
import Link from "next/link";

const content = [
    { "icon": "../static/icons/calendar.svg", "title" : "ON-CAMPUS EVENTS", "content" : <>Interested in learning more about crypto? View our calendar to see the events we’re planning.  Current Rice students can join our club using <Link href="#">this form.</Link></>},
    { "icon": "../static/icons/triangle.svg", "title" : "COMPANIES & PROJECTS", "content" : <>Seeking engineers with smart contract and full-stack development experience for private or open-source work? Reach out <Link href="mailto:blockchain@rice.edu">via email</Link> with inquiries.</>},
    { "icon": "../static/icons/book.svg", "title" : "VIEW COURSE CONTENT", "content" : <>We’re teaching a non-technical primer on blockchains and crypto this semester. Interested in following along? View the class content <Link href="https://medium.com/rice-blockchain">on Medium.</Link></>}
]

const Blurbs = () => (
    <div className="row">
        <Grid.Provider breakpoints={{ mobile: "-500", tablet: "501-1100", wide: "+1100" }}>
            <Grid.Bounds style={{"display": "flex", "align-items": "center", "justify-content": "space-between"}} direction="vertical" wide={{ direction: "horizontal" }}>
                { content.map(({ icon, title, content }) => 
                    <Grid.Box>
                        <div className="blurb">
                            <img src={icon} />
                            <div className="text">
                                <div className="header">{title}</div>
                                <div className="description">{content}</div>
                            </div>
                        </div>
                    </Grid.Box>)
                }
            </Grid.Bounds>
        </Grid.Provider>
        <style jsx>
        {`

            .blurbbox {
                display: flex !important;
                justify-content: center !important;
                align-content: center !important;
                align-items: center !important;
            }

            .blurb {
                text-align: left;
                margin: 0.2em;
                display: flex;
                flex-flow: row nowrap;
                max-width: 350px;
            }

            .header {
                flex-basis: 100%;
                font-weight: semibold;
                font-family: 'Rhode';
                margin-bottom: 1em;
                margin-top: 0.5em;
            }

            .text {
                margin-left: 0.8em;
            }

            .description {
                font-size: 1em;
                line-height: 1.3em;
            }
        `}
        </style>
    </div>
)

export default Blurbs