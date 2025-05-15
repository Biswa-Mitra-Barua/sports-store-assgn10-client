import React from 'react';

const FAQSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-16 rounded-md">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <details className="group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 dark:text-white">
                            What types of sports equipment do you sell?
                            <span className="ml-2 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            We offer a wide range of equipment for football, cricket, tennis, badminton, fitness training, and many more sports.
                        </p>
                    </details>

                    <details className="group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 dark:text-white">
                            Do you offer international shipping?
                            <span className="ml-2 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            Yes, we ship worldwide. Shipping costs and delivery times vary based on your location.
                        </p>
                    </details>

                    <details className="group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 dark:text-white">
                            Can I return or exchange items?
                            <span className="ml-2 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            Absolutely! We offer a 14-day return and exchange policy on all unused items.
                        </p>
                    </details>

                    <details className="group bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 dark:text-white">
                            Do you offer discounts for bulk purchases?
                            <span className="ml-2 transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            Yes, we provide special pricing for bulk and institutional orders. Contact our sales team for details.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
