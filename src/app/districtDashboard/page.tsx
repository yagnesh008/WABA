import DistrictDashboard from "@/src/components1/Dashboards/DistrictDashboard/DistrictDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function DistrictDashboardPage() {
  return (
    <>
      <Sidebar role="district" />
      <Header />
      <DistrictDashboard />
    </>
  );
}
