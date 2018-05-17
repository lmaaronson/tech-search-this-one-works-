import React from "react";
import RemoveBtn from "../RemoveBtn";

export const SavedItem = props => (
  <li className="list-group-item">
    <strong><p align="left">{props.title}</p></strong>
    <p align="right">{props.companyName}<RemoveBtn onClick={props.remove} /></p>
    <a href={props.url}>Link</a>
  </li>
);