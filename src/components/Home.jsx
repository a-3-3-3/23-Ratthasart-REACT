import { useState } from "react";
import { AdminHomeSection, UserForm } from "./AdminHomeSection";
import UserHomeSection from "./UserHomeSection";

const Home = () => {
  const [activeSection, setActiveSection] = useState("Assessment");

  return (
    <div>
      <div>
        <h1 className="text-7xl text-center font-bold pt-22">
          Generation Thailand
        </h1>
        <h1 className="text-7xl text-center font-bold">
          React - {activeSection}
        </h1>
      </div>
      <div className="flex justify-evenly gap-10 pt-22">
        <button
          className="p-4 bg-white shadow-md rounded font-bold"
          onClick={() => setActiveSection("User Section")}
        >
          User Home Section
        </button>
        <button
          className="p-4 bg-white shadow- rounded font-bold"
          onClick={() => setActiveSection("Admin Section")}
        >
          Admin Home Section
        </button>
      </div>
      <div className="pt-12">
        {activeSection === "User Section" && <UserHomeSection />}
        {activeSection === "Admin Section" && (
          <div>
            <UserForm />
            <br />
            <br />
            <br />
            <AdminHomeSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
