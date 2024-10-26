import { useContext } from "react";
// import { tableData } from "./data";
import { blueDot, greenDot } from "./Svgs";
import { AppContext } from "./context/AppContext";

const TabletTabulatedData = () => {
  const { displayData, handleTitleClick } = useContext(AppContext);

  console.log(displayData);

  return (
    <div className="hidden lg:flex px-7">
      <table className="w-full">
        <thead className="bg-[#F1F5F9] text-[#64748b] dark:text-[#fff] dark:bg-[#6A6676] h-12">
          <tr>
            <th className="text-[12px] font-semibold leading-4 text-left px-4 w-[269px]">
              Event Name
            </th>
            <th className="text-[12px] font-semibold leading-4 text-left px-4 w-[269px]">
              Date
            </th>
            <th className="text-[12px] font-semibold leading-4 text-left px-4">
              Speaker
            </th>
            <th className="text-[12px] font-semibold leading-4 text-left px-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="dark:bg-[#484554] text-[#334155] dark:text-[#fff]">
          {displayData.map((item) => (
            <tr key={item.id} className="h-12 text-left hover:bg-[#f1f5f989] dark:hover:bg-[#6a667645] transition-all">
              <td
                onClick={() => handleTitleClick(item)}
                className="text-[14px] font-normal xleading-5 px-4 cursor-pointer"
              >
                {item.title}
              </td>
              <td className="text-[14px] font-normal leading-5 px-4">
                {item.date}
              </td>
              <td className="text-[14px] font-normal leading-5 px-4">
                {item.speaker}
              </td>
              <td className={`text-[12px] font-normal leading-5 px-4 `}>
                <div
                  className={`flex items-center gap-2 justify-center px-4 py-[2px] rounded-[30px] w-fit dark:border  ${
                    item.status === "Completed"
                      ? "bg-[#D1FAE5] dark:bg-transparent dark:border-[#65DDB5]"
                      : "bg-[#DBEAFE] dark:bg-transparent dark:border-[#77B1FF]"
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
