import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import SportsCategories from "../components/SportsCategories/SportsCategories";


const HomeLayout = () => {
    const equipments = useLoaderData();

    return (
        <div>
            <main className="w-11/12 mx-auto my-10">
                <section>
                    <Slider></Slider>
                </section>
                {/* PRODUCTION SECTION  */}
                <section className="mt-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-5">Our Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                        {
                            equipments.map(equipment => 
                            <EquipmentCard
                            key={equipment._id}
                            equipment={equipment}
                            ></EquipmentCard>)
                        }
                    </div>
                </section>

                {/* SPORTS CATEGORIES  */}
                <section className="my-20">
                    <SportsCategories></SportsCategories>
                </section>

                {/* Another Section */}
                <section>
                    {/* <About></About> */}
                </section>

                {/* Another Section */}
                <section>
                    {/* <WhyChooseUs></WhyChooseUs> */}
                </section>

            </main>
        </div>
    );
};

export default HomeLayout;