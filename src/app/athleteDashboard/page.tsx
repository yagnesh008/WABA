import AthleteDashboard from "@/src/components1/Dashboards/AthleteDashboard/AthleteDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function AthleteDashboardPage() {
  return (
    <>
      <Sidebar role="athlete" />
      <Header />
      <AthleteDashboard />
    </>
  );
}
