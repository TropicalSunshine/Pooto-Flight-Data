import React, { Component } from 'react'

import {Spinner, SpinnerSize} from 'office-ui-fabric-react/lib/Spinner';


export default function Loader(props)
{
    return (
        <div className = "loader" id = {"loader-" + props.name}>
            <Spinner size = {SpinnerSize.large}/>
        </div>
    )
}
