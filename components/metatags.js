const og_pic = "/static/images/metatag.png"

export default () => (
    <>
    <meta name="title" content="Rice Blockchain"/>
    <meta name="description" content="Student-led org @RiceUniversity promoting blockchain education, research, and development."/>

    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://blockchain.rice.edu/"/>
    <meta property="og:title" content="Rice Blockchain"/>
    <meta property="og:description" content="Student-led org @RiceUniversity promoting blockchain education, research, and development."/>
    <meta property="og:image" content={og_pic}/>

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://blockchain.rice.edu/"/>
    <meta property="twitter:title" content="Rice Blockchain"/>
    <meta property="twitter:description" content="Student-led org @RiceUniversity promoting blockchain education, research, and development."/>
    <meta property="twitter:image" content={og_pic}/>
    </>
)