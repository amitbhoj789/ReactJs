import { CDN_url } from "../utils/constants";


const RestuarantCard = (props) =>{
    // const RestuarantCard = ({resName, cuisine}) =>{ 
    // const {resName, cuisine, rating, deliveryTime, cardImg} = props; // destructuring
    const { resData } = props;
    const {
            cloudinaryImageId,
            name,
            avgRating,
            cuisines,
            locality  
        } = resData.info
    return(
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor : "#f1f1f1" }}>
            <img className="res-logo" alt="restuarant-logo" style={{width:"100%", height:"200px"}}
            src={
                CDN_url + cloudinaryImageId
            } />
            {/* <h3>{resName}</h3> */}
            {/* <h3>{props.resName}</h3> */}
            {/* <h3>{resData.info.name}</h3> */}
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{locality}</h4>
        </div>
    );
};


export default RestuarantCard;