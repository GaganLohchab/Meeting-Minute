import Header  from "./Header";
import LeftSidebar from './LeftSidebar'

const Homepage = () => {
    return (
        <div className="Homepage bg-white min-h-screen">
        <Header />
        <LeftSidebar />
        </div>
    );
    
};
export default Homepage;