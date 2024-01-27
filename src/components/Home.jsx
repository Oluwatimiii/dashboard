import Main from './Main'
import Sidebar from './Sidebar'

const Home = () => {
    return (
        <div className="flex w-full mx-auto font-inter">
            <div className='hidden md:block'>
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className="bg-[#FAFAFA] dark:bg-darrk pb-10">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Home