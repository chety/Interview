import React from "react";

const OptionSelector = ({ caption, options }) => {
    return <React.Fragment>
        <form style={{margin:"8px"}}> 
            <label>{caption}</label>
            <select name="thelist" style={{width:"100%",height:"30px"}}>
                return {options.map(s => {
                    return <option key={s.id}>{s.text}</option>
                })}
            </select>
        </form>
    </React.Fragment>
}

export default OptionSelector;