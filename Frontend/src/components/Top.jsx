import React from "react";
import { motion } from "framer-motion";
import I1 from "../assets/images/tajmahal.png";
import I2 from "../assets/images/tigernest.png";
import I3 from "../assets/images/maldives.png";
import I4 from "../assets/images/dubai.png";

const Top = () => {
  const topSelling = [
    {
      id: 1,
      image: I1,
      Destination: "Agra",
      price: "4,999 INR",
      duration: "3 days",
    },
    {
      id: 2,
      image: I2,
      Destination: "Bhutan",
      price: "100,000 INR",
      duration: "7 days",
    },
    {
      id: 3,
      image: I3,
      Destination: "Maldives",
      price: "200,000 INR",
      duration: "5 days",
    },
    {
      id: 4,
      image: I4,
      Destination: "Dubai",
      price: "50,000 INR",
      duration: "2 days",
    },
  ];

  return (
    <div className="w-full mx-auto my-12">
      <h1 className="text-center text-gray-700 text-2xl font-semibold">
        Top Selling
      </h1>
      <h1 className="my-2 text-center text-gray-900 text-4xl font-bold">
        Top Places
      </h1>

      <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 items-center justify-center">
        {topSelling.map((item, index) => (
          <motion.div
            key={item.id}
            className="mx-auto flex flex-col items-center justify-center rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-80 h-[320px] overflow-hidden ml-4 rounded-lg">
              <motion.img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.Destination}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex items-center justify-around w-full mt-3">
              <h4 className="text-lg font-semibold text-gray-800">
                {item.Destination}
              </h4>
              <p className="text-lg font-bold text-gray-900">{item.price}</p>
            </div>

            <p className="text-sm text-gray-500 mb-3">{item.duration}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Top;