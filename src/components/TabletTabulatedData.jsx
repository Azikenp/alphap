import { tableData } from "./data";
import { blueDot, greenDot } from "./Svgs";

const TabletTabulatedData = () => {
  return (
    <div className="hidden lg:flex">
      <table className="w-full">
        <thead className="bg-[#F1F5F9] h-12">
          <tr>
            <th className="text-[#64748b] text-[12px] font-semibold leading-4 text-left px-4 w-[269px]">
              Event Name
            </th>
            <th className="text-[#64748b] text-[12px] font-semibold leading-4 text-left px-4 w-[269px]">
              Date
            </th>
            <th className="text-[#64748b] text-[12px] font-semibold leading-4 text-left px-4">
              Speaker
            </th>
            <th className="text-[#64748b] text-[12px] font-semibold leading-4 text-left px-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="h-12 text-left">
              <td className="text-[#334155] text-[14px] font-normal leading-5 px-4">
                {item.title}
              </td>
              <td className="text-[#334155] text-[14px] font-normal leading-5 px-4">
                {item.date}
              </td>
              <td className="text-[#334155] text-[14px] font-normal leading-5 px-4">
                {item.speaker}
              </td>
              <td
                className={`text-[#334155] text-[12px] font-normal leading-5 px-4 `}
              >
                <div
                  className={`flex items-center gap-2 justify-center px-4 py-[2px] rounded-[30px] w-fit ${
                    item.status === "Completed"
                      ? "bg-[#D1FAE5]"
                      : "bg-[#DBEAFE]"
                  }`}
                >
                  {item.status === "Completed" ? greenDot : blueDot}
                  <p>{item.status}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabletTabulatedData;
