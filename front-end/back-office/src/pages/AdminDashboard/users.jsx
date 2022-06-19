import VaccitionTable from "../../components/VaccinationTable";
export default function vaccination() {

  return (
    <div className="w-[100%]">
      <div className="flex justify-between items-center ">
        <h1 className="text-4xl font-black pl-12  py-14">Users List</h1>
      </div>
      <div className="flex">
        <div className="w-full">
        <VaccitionTable />
        </div>
      </div>
    </div>
  )
}