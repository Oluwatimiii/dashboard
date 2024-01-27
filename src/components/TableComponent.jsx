import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import Cooper from "../assets/images/cooper.png"
import Corey from "../assets/images/corey.png"
import Jaydon from "../assets/images/jaydon.png"
import Marcus from "../assets/images/marcus.png"
import Philip from "../assets/images/philip.png"
import View from "../assets/images/view.png"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const datas = [
    {
        name: "Marcus Bergson",
        amount: "$80,000",
        image: Marcus,
        date: "Nov 15, 2023",
        status: "Paid"
    },
    {
        name: "Jaydon Vaccaro",
        amount: "$150,000",
        image: Jaydon,
        date: "Nov 15, 2023",
        status: "Refund"
    },
    {
        name: "Corey Schleifer",
        amount: "$87,000",
        image: Corey,
        date: "Nov 14, 2023",
        status: "Paid"
    },
    {
        name: "Cooper Press",
        amount: "$100,000",
        image: Cooper,
        date: "Nov 15, 2023",
        status: "Refund"
    },
    {
        name: "Phillip Lubin",
        amount: "$78,000",
        image: Philip,
        date: "Nov 13, 2023",
        status: "Paid"
    },
]


const TableComponent = () => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="text-[#9CA4AB]">
                        <TableHead className="">
                            Name
                        </TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        <TableHead className="text-right">Invoice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        datas.map((data) => {
                            return (
                                <TableRow key={data.name}>
                                    <TableCell className="font-medium text-[12px] md:text-base text-[#3A3F51] dark:text-gray-300 flex items-center cursor-pointer hover:font-semibold gap-2 justify-start">
                                        <img src={data.image} />
                                        <p className="text-[10px] pr-4 md:text-base sm:pr-0">{data.name}</p>
                                    </TableCell>
                                    <TableCell className="text-[#737373] text-[11px] md:text-base">{data.date}</TableCell>
                                    <TableCell className="font-bold text-[11px] md:text-base">{data.amount}</TableCell>
                                    <TableCell className={`text-right text-[12px] md:text-base  font-semibold ${data.status === "Paid" ? "text-green-700" : "text-red-700"}`}>{data.status}</TableCell>
                                    <TableCell className="cursor-pointer">
                                        <div className="flex text-sm md:text-base items-center justify-center m-auto space-x-2">
                                            <img src={View} className="dark:filter dark:brightness-0 dark:invert" />
                                            <div className="mx-4">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <p>View</p>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-[300px] md:max-w-md">
                                                        <DialogHeader>
                                                            <DialogTitle className="font-medium text-[12px] md:text-base text-[#3A3F51] dark:text-gray-300 flex items-center cursor-pointer hover:font-semibold gap-2 justify-start">
                                                                <img src={data.image} />
                                                                {data.name}
                                                            </DialogTitle>
                                                            <DialogDescription>
                                                                Big time customer and delivers duly
                                                            </DialogDescription>
                                                        </DialogHeader>

                                                        <DialogFooter className="sm:justify-start">
                                                            <DialogClose asChild>
                                                                <Button type="button" variant="secondary">
                                                                    Close
                                                                </Button>
                                                            </DialogClose>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>

                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default TableComponent