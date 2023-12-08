import React from "react";
import SectionOne from "../components/section-one";
import SectionTwo from "../components/section-two";
import SectionThree from "../components/section-three";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Dashboard;
