import {
    HomeCompanyInfo,
    HomeProducts,
    HomeServices,
    HomeSlider,
} from "../components";

function Home() {
    return (
        <div>
            <HomeSlider />
            <HomeProducts />
            <HomeServices />
            <HomeCompanyInfo />
        </div>
    );
}

export default Home;
