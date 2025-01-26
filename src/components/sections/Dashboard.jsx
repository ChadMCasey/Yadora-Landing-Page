import dashboardImage from "../../assets/dashboard.png";

const Dashboard = () => {
  return (
    <section className="relative">
      <div className="bottom-0 -z-10 absolute bg-primary w-full h-1/2"></div>
      <div className="justify-items-center grid m-auto px-24 py-16 max-w-[90rem]">
        <img src={dashboardImage} className="block w-full" />
      </div>
    </section>
  );
};

export default Dashboard;
