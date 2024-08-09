import Layout from "../css/Layout.module.css"

function Slide({children, header,link}) {
  return (
    <div className={Layout.contentbox +" "+" "+ Layout.vertical+""}>
        <h2 >{header}</h2>
        <div className={ Layout.center}> 
        <p className={ Layout.center+" "+Layout.contentbox}> {children}</p>
        {link? link: <></>}
        </div>
        
        </div>
  );
}

export default Slide;