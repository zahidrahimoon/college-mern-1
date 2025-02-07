// import CommerceTable from "../components/CommerceTable";
import Footer from "../components/Footer";
import ScheduleTable from "../components/ScheduleTable";
import ScheduleTableForMedXi from "../components/ScheduleTableForMedXi";

const StudentTimeTable = () => {
  return (
    <>
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/commercexi`} title="Commerce (XI) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/commercexii`} title="Commerce (XII) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/engxi`} title="ENG (XI) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/engxii`} title="ENG (XII) Time Table" />
      <ScheduleTableForMedXi apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/medxi`} title="MED (XI) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/medxii`} title="MED (XII) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/genscixi`} title="GENSCI (XI) Time Table" />
      <ScheduleTable apiEndpoint={`${import.meta.env.VITE_BASE_URL}/api/genscixii`} title="GENSCI (XII) Time Table" />
      <Footer />
    </>
  );
};

export default StudentTimeTable;
