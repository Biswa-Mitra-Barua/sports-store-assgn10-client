import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import SportsCategories from "../components/SportsCategories/SportsCategories";
import TopDeals from "../components/TopDeals/TopDeals";
import SportsTips from "../components/SportsTips/SportsTips";
import { Bounce, Fade } from "react-awesome-reveal";

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
                    <Bounce cascade><h1 className="text-3xl md:text-5xl font-bold text-center mb-5">Our Products</h1>
                        <p className="text-center mt-2 mb-4 w-4/5 mx-auto">Elevate your game with our premium sports equipment, designed for athletes of all levels. From outdoor adventures to professional training, we offer durable, high-performance gear to help you achieve your goals.</p>
                    </Bounce>

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

                <section className="my-10">
                    <Fade>
                        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-purple-300 to-indigo-500">FIND OUT MORE ...</h1>
                    </Fade>
                </section>

                <section>
                    <TopDeals></TopDeals>
                </section>

                {/* Another Section */}
                <section>
                    <SportsTips></SportsTips>
                </section>

            </main>
        </div>
    );
};

export default HomeLayout;