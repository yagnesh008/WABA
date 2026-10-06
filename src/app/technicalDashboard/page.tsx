import TechnicalDashboard from "@/src/components1/Dashboards/TechnicalDashboard/TechnicalDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function TechnicalDashboardPage() {
  return (
    <>
      <Sidebar role="technical" />
      <Header />
      <TechnicalDashboard />
    </>
  );
}
