import Header from "./Header";
import LeftSidebar from './LeftSidebar'

const Homepage = () => {
    return (
        <div className="Homepage bg-white flex flex-col h-screen overflow-hidden">
            <Header />
            <LeftSidebar />
        </div>
    );
};

export default Homepage;