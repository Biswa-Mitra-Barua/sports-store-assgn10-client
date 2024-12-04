import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";


const HomeLayout = () => {
    const services = useLoaderData();

    return (
        <div>
            <main className="w-11/12 mx-auto my-10">
                <section>
                    <Slider></Slider>
                </section>
                {/* PRODUCTION SECTION  */}
                <section className="mt-20">
                    <h1 className="text-4xl font-semibold text-center mb-5">Product Section</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                        
                    </div>
                </section>

                {/* SPORTS CATEGORIES  */}
                <section className="mt-20">
                    <h2 className="text-4xl font-semibold text-center mb-5">Sports Categories Section</h2>
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