import { FaAngleDoubleRight } from "react-icons/fa";

const Desc = ({ info }) => {
  let { company, dates, duties, id, order, title } = info();
  console.log(info());
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold ">{title}</h1>
      <p className="bg-gray-200 text-gray-600 w-max px-3 py-1 text-sm rounded-md font-semibold">
        {company}
      </p>
      <p className="font-bold italic text-gray-700">{dates}</p>
      {duties.map((d) => {
        return (
          <div className="flex space-x-4 items-center ">
            <FaAngleDoubleRight className="text-2xl text-green-600" />
            <p className="text-sm text-gray-600">{d}</p>
          </div>
        );
      })}
      <button></button>
    </div>
  );
};
export default Desc;
