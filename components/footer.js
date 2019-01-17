import Link from "next/link"

import medium from '../static/icons/medium.svg';
import twitter from '../static/icons/twitter.svg';

const Footer = () => (
    <div className="footer">
        <Link href="https://medium.com/rice-blockchain"><img src={medium} className="icon" /></Link>
        <Link href="https://twitter.com/riceblockchain"><img src={twitter} className="icon" /></Link>
        <style jsx>
            {`
                .footer {
                    width: 10%;
                    margin-left: 45%;
                    margin-right: 45%;
                    margin-top: 1em;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    align-content: center;
                    justify-content: space-around;
                    margin-bottom: 2em;
                }

                .icon {
                    margin-left: 8px;
                    margin-right: 8px;
                }
            `}
        </style>
    </div>
)

export default Footer