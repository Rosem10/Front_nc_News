import React from "react";
import {Link} from "@reach/router"

function TopicListItem(props) {
  const topic = props.topic.slug
  return <li><Link to = {`/articles/topic/${topic}`}>{props.topic.slug}</Link></li>;
}

export default TopicListItem;
