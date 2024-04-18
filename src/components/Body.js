import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData";

const Body = () =>{
    // state variable
    const [listOfRestuarants, setlistOfRestuarants] = useState([]); // array destructuring
    // const arr = useState(resList); 
    // const [listOfRestuarants, setlistOfRestuarants] = arr;
    // const listOfRestuarants = arr[0];
    // const setlistOfRestuarants = arr[1];

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4539122&lng=77.0811923&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //console.log(data);
        
        const json = await data.json();
        //console.log(json);
        //console.log("accessing list of objects", json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestuarants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // optional chaining   

    };


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=>{
                        const filteredList = listOfRestuarants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setlistOfRestuarants(filteredList);
                       
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {
                    // resList.map( (restaurant, index) =>(
                    //     <RestuarantCard  key={index} resData={restaurant}/>    // using index as a key not acceptable
                    // ) )

                    listOfRestuarants.map( (restuarant) => (
                        <RestuarantCard  key={restuarant.info.id} resData={restuarant} />  
                    ))
                }
            </div>
        </div>
    );
};

export default Body;