import React from 'react';

const Spinner = (props) => {
    //let message = props?.message ? props.message : "Loading...";
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message : "Loading..."
}

export default Spinner;