import React from "react";
import ItemList from "./ItemList";

class ToolsSection extends React.Component{
    render(){
        return (
            <div className="container mt-5" style={{marginTop:"100px"}}>
                <div className="px-5 mb-5">
                    <h3 className="pb-3 px-5 mb-2 pb-3" 
                    style={{textAlign:"center", borderBottom:"#e4e0e0 solid 1px" ,position:"relative", lineHeight:"1.2"}}>
                    <img src={require('./../images/dripperIcon.png')} width={50} height={50}></img> Tools
                    </h3>
                </div>
                <ItemList item={"tools"} title={"TOOLS"}></ItemList>
            </div>
        );
    }
}

export default ToolsSection;