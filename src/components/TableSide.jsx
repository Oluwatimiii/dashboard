import { Progress } from "./ui/progress"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

const TableSide = () => {
    return (
        <ScrollArea className="max-h-[474px] whitespace-nowrap md:h-full md:w-full">
            <div className="bg-white dark:bg-darrk p-8 rounded-lg w-full border-[1px] space-y-3 hover:shadow-md border-[#DADDDD] dark:border-gray-300/20">
                <div className="flex items-center justify-between pb-4">
                    <p className="font-bold text-sm md:text-medium text-[#26282C] dark:text-white">Top Platform</p>

                    <p className="text-[#34CAA5] dark:text-white text-sm md:text-medium cursor-pointer font-semibold">See All</p>
                </div>
                {/* BARS */}
                <div className="space-y-2">
                    <p className="font-semibold text-black dark:text-white text-lg">Book Bazzar</p>
                    <Progress value={51} className="w-[100%]" indicatorColor="bg-[#6160DC]" />
                    <div className="flex items-center justify-between">
                        <p className="text-[#525252] text-[17px]">$2,500,000</p>
                        <p className="text-[#525252] text-[17px]">+15%</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-semibold text-black dark:text-white text-lg">Artisan Aisle</p>
                    <Progress value={28} className="w-[100%]" indicatorColor="bg-[#54C5EB]" />
                    <div className="flex items-center justify-between">
                        <p className="text-[#525252] text-[17px]">$1,800,000</p>
                        <p className="text-[#525252] text-[17px]">+10%</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-semibold text-black dark:text-white text-lg">Toy Troop</p>
                    <Progress value={43} className="w-[100%]" indicatorColor="bg-[#FFB74A]" />
                    <div className="flex items-center justify-between">
                        <p className="text-[#525252] text-[17px]">$1,200,000</p>
                        <p className="text-[#525252] text-[17px]">+8%</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-semibold text-black dark:text-white text-lg">Xstore</p>
                    <Progress value={73} className="w-[100%]" indicatorColor="bg-red-600" />
                    <div className="flex items-center justify-between">
                        <p className="text-[#525252] text-[17px]">$12,500,000</p>
                        <p className="text-[#525252] text-[17px]">+35%</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="font-semibold text-black dark:text-white text-lg">Xavi Alonso</p>
                    <Progress value={13} className="w-[100%]" indicatorColor="bg-green-500" />
                    <div className="flex items-center justify-between">
                        <p className="text-[#525252] text-[17px]">$400,000</p>
                        <p className="text-[#525252] text-[17px]">+5%</p>
                    </div>
                </div>
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}

export default TableSide