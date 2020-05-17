import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";
import {isMobile} from '../helpers/combo-helper'
import { withRouter } from "react-router";
import {useState, useEffect, useContext, createContext} from "react"

export default function Header({

}) {
    return <>
        <div className="header-wrap">
            <span className="header-title">Fero's personal web</span>
        </div>
    </>
}