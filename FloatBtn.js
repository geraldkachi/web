import React from "react";

const FloatBtn = () => {
  return(
      <div  className="float">
        <div className="my-float text-center">
          &#43;
        </div>
      </div>  
}

const float = {
    position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

const myFloat = {
     margin-top:22px;
  justify-content: center;
  align-items: center;
}

export default FloatBtn
