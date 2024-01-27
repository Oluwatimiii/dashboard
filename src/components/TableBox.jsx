const TableBox = ({ image1, image2, image3, title, amount }) => {
    return (
        <div className="bg-white dark:bg-darrk rounded-lg border-[1px] border-[#DADDDD] dark:border-gray-300/20 hover:shadow-md p-3 md:p-2 flex flex-col space-y-2 justify-between">
            <div className="flex items-center justify-between">
                <img src={image1} />
                <img src={image2} />
            </div>

            <div className="gap-y-2">
                <p className="font-normal text-[#898989] dark:text-white text-lg">{title}</p>
                <p className="text-[#3A3F51] dark:text-white text-xl font-semibold">{amount}</p>
            </div>

            <div className="flex items-center space-x-2 justify-between">
                <img src={image3} />
                <p className="text-[#606060] dark:text-white text-[14px]">vs previous month</p>
            </div>
        </div>
    )
}

export default TableBox