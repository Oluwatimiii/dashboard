import BarChartComponent from "./BarChartComponent";
import Navbar from "./Navbar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Green2 from "../assets/boxasset/green2.png"
import GreenUp from "../assets/boxasset/greenUp.png"
import GreenArrow from "../assets/boxasset/greenarrow.png"
import GreenBox from "../assets/boxasset/greenbox.png"
import GreenMoney from "../assets/boxasset/greenmoney.png"
import Redarrow from "../assets/boxasset/redarr.png"
import RedCart from "../assets/boxasset/redcart.png"
import Redup from "../assets/boxasset/redup.png"
import TableBox from "./TableBox";
import TableComponent from "./TableComponent";
import TableSide from "./TableSide";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Search from "../assets/Seacrh.png"
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const datas = [
  {
    name: "Total order",
    amount: "350",
    image1: GreenBox,
    image2: GreenArrow,
    image3: GreenUp,
  },
  {
    name: "Total Refund",
    amount: "267",
    image1: Green2,
    image2: Redarrow,
    image3: Redup,
  },
  {
    name: "Average sales",
    amount: "1567",
    image1: RedCart,
    image2: Redarrow,
    image3: Redup,
  },
  {
    name: "Total income",
    amount: "$350.000",
    image1: GreenMoney,
    image2: GreenArrow,
    image3: GreenUp,
  },
]

const Main = () => {
  return (
    <section className="min-h-screen w-full ">
      <Navbar />

      {/* Main content */}
      <div className="md:ml-20 pt-[80px] mb-[20px] md:pt-[88px] px-8 py-6 md:py-0">
        {/* Mobile search */}
        <div className="flex w-full lg:hidden items-center space-x-2 my-4">
          <Input type="email" placeholder="Search..." />
          <Button type="submit">Search dashboard</Button>
        </div>

        {/* Charts and boxes */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 justify-center lg:justify-between">
          <div className="lg:max-w-[62%] h-full bg-white dark:bg-black p-3 lg:p-8 rounded-lg w-full border-[1px] hover:shadow-md border-[#DADDDD] dark:border-gray-300/20 dark:border-gray-300/20">
            <div className="flex items-center justify-between pb-4">
              <p className="font-semibold text-[#26282C] dark:text-white">Sales Trends</p>

              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm text-medium">Short by:</p>

                <div>
                  <Select>
                    <SelectTrigger className="w-[130px] h-[37px]">
                      <SelectValue placeholder="Weekly" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* w-[500px] overflow-x-auto md: */}
            {/* Chart */}
            <div className=" w-full bg-white dark:bg-black cursor-pointer">
              <BarChartComponent />
            </div>
          </div>

          <div className="lg:max-w-[38%] w-full grid md:grid-cols-2 gap-2 lg:gap-3">
            {
              datas.map((data, index) => {
                return (
                  <TableBox key={index} amount={data.amount} image1={data.image1} image2={data.image2} image3={data.image3} title={data.name} />
                )
              })
            }
          </div>
        </div>

        {/* Order table and platform */}
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-3 justify-center lg:justify-between">
            <div className="lg:max-w-[62%] h-full bg-white dark:bg-black p-3 lg:p-8 rounded-lg w-full border-[1px] hover:shadow-md border-[#DADDDD] dark:border-gray-300/20">
              <div className="flex items-center justify-between pb-4">
                <p className="font-bold text-sm md:text-medium text-[#26282C] dark:text-white">Last Orders</p>

                <p className="text-[#34CAA5] dark:text-white text-sm md:text-medium cursor-pointer font-semibold">See All</p>
              </div>

              {/* Table */}
              <div className="bg-white dark:bg-black">
                <ScrollArea className="w-96 whitespace-nowrap md:h-full md:w-full">
                  <TableComponent />
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>

            <div className="lg:max-w-[38%] w-full">

              <TableSide />
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Main