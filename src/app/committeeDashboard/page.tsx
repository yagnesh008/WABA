import CommitteeDashboard from "@/src/components1/Dashboards/CommitteeDashboard/CommitteeDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function CommitteeDashboardPage() {
  return (
    <>
      <Sidebar role="committee" />
      <Header />
      <CommitteeDashboard />
    </>
  );
}
