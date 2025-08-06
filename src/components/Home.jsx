import UserHomeSection from "./UserHomeSection";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-7xl text-center font-bold pt-22">
          Generation Thailand
        </h1>
        <h1 className="text-7xl text-center font-bold">React - Assessment</h1>
      </div>
      <div className="flex justify-evenly gap-10 pt-22">
        <button className="p-4 bg-white shadow-md rounded">
          User Home Section
        </button>
        <button className="p-4 bg-white shadow-md rounded">
          Admin Home Section
        </button>
      </div>
      <div className="flex justify-center pt-22">
        <UserHomeSection />
      </div>
    </div>
  );
};

export default Home;
