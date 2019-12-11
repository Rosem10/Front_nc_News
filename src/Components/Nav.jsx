import React from 'react'
import {Link} from "@reach/router"

export default function Nav() {
    return (
        <div id = "Nav">
            <Link to= "/topics">Topics</Link>
            <br/>
            <Link to = "/authors">Authors</Link>
        </div>
    )
}
