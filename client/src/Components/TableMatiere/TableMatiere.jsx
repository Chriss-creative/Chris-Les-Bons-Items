/* eslint-disable react/jsx-no-target-blank */
// -----------------------------------------
// Table des matière vierge
// -----------------------------------------

import React from "react";

const TableMatiere = (props) => {
  return (
    <nav className="navTables">
      <ul className="ulTables">
        <li className="liTables">
          <a href="#table0">Notre sélection au moins cher</a>
          <ul className="ulTables">
            <li className="liTables">
              <a href={props.link1} target="_blank">
                {props.name1}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link2} target="_blank">
                {props.name2}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link3} target="_blank">
                {props.name3}
              </a>
            </li>
          </ul>
        </li>
        <li className="liTables">
          <a href="#table1">Notre sélection meilleurs qualité</a>
          <ul className="ulTables">
            <li className="liTables">
              <a href={props.link4} target="_blank">
                {props.name4}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link5} target="_blank">
                {props.name5}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link6} target="_blank">
                {props.name6}
              </a>
            </li>
          </ul>
        </li>
        <li className="liTables">
          <a href="#table3">Les meilleurs retour client</a>
          <ul className="ulTables">
            <li className="liTables">
              <a href={props.link7} target="_blank">
                {props.name7}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link8} target="_blank">
                {props.name8}
              </a>
            </li>
            <li className="liTables">
              <a href={props.link9} target="_blank">
                {props.name9}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default TableMatiere;
