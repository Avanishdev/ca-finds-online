import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import About from "../components/About"
import RecommendedForYouContainer from "../components/RecommendedForYouContainer";
import Bottom from "../components/Bottom";



const DetailsPage = () => {
    return (
        <>
            <Navbar className=''/>
            <div className="flex height-[auto]">
                <Card className=''/>
                <About className=''/>
            </div>
            <RecommendedForYouContainer/>
            <Bottom/>
        </>
  );
};

export default DetailsPage;
