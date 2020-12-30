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

// react- router 
// 	  from this state 
//     render() {

//     const { sections } = this.state;

//     const DirectoryArray = sections.length ? (
//       sections.map(({ id, ...sectionProps }) => (
//         <MenuItem key={id} {...sectionProps} />
//       ))
//     ) : (
//       <div>No Items...</div>
//     );
//     return <div className="directory-menu">{DirectoryArray}</div>;
//   }
// }
////////////////// to this
	  
// const MenuItem = ({title, size, imageUrl, history, match, linkUrl}) => {
//     return (
//         <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
//             <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
//                 <div className="content">
//                     <h1 className="title">{title.toUpperCase}</h1>
//                     <span className="subtitle">SHOP NOW</span>
//                 </div>
//             </div>
//         </div>
//     )
// }



export default FloatBtn
