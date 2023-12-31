import React from "react";


import Section from "../components/Section";
import SectionForm from "../components/SectionForm";
import SearchFormContainer from "../components/SectionFormContainer";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div className="relative bg-fs-search-surface-bg w-full h-[3109px] overflow-hidden">
      
      <Section />
      <SectionForm />
      <SearchFormContainer />
      <Footer/>
    </div>
  );
};

export default HomePage;
