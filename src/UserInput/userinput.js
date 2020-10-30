import React from 'react';

const userinput = (props) => {
    const style= {
        color:'red'
    }
    return <input type="text" onChange={props.onChange1} style={style}/>
        

}
export default userinput;