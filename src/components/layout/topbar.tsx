import React from "react";
import MobileNav from "./mobile-nav";
import SearchBar from "./component/search-bar";
import ProfileAvatar from "./component/profile-avatar";

const Topbar: React.FC = () => {
  return (
    <div className="sticky left-0 top-0 z-10 border-b border-b-slate-100 bg-white/20 p-6 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MobileNav />

          <SearchBar />
        </div>

        <ProfileAvatar />
      </div>
    </div>
  );
};

export default Topbar;
