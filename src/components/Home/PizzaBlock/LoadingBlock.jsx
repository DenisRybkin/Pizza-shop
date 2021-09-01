import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="137" cy="130" r="130" />
        <rect x="-1" y="302" rx="11" ry="11" width="280" height="85" />
        <rect x="0" y="409" rx="15" ry="15" width="89" height="27" />
        <rect x="147" y="397" rx="30" ry="30" width="132" height="40" />
        <rect x="37" y="266" rx="0" ry="0" width="197" height="30" />
    </ContentLoader>
)

export default MyLoader