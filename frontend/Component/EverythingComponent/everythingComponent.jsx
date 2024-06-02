import React from "react";
import { FaCircleCheck, FaCircleDollarToSlot } from "react-icons/fa6";

const EverythingComponent = () => {
  return (
    <div className="flex flex-col mt-2">
      <hr />
      <div className="flex flex-row w-full h-[500px]  ">
        <div className="flex p-2 ml-[230px] w-[500px]  justify-between">
          <div className="ml-[150px] flex flex-col  mt-12  gap-6">
            <div className="">
              <p className=" text-5xl  font-bold  text-black">
                Everything you need <br />
                to grow your
                <br />
                business
              </p>
            </div>
            <div>
              <p className="text-md text-black">
                OneLot is your trusted lending and financing partner,
                exclusively tailored for used car dealership. We also offer
                digital tools for streamlined operations and growth of your
                dealership.
              </p>
            </div>
          </div>
        </div>
        <div className="flex p-2 w-[600px]  justify-between">
          <div className="mb-3 2xl:pr-40 ml-4 sm:pt-10">
            <div className="flex items-center gap-6 mb-4">
              <FaCircleDollarToSlot />
              <p className="text-xl font-bold">Dealer Inventory Loans</p>
            </div>
            <p className="text-[#7E3AF2] my-4 font-medium sm:ml-10">
              Accelerate your growth with tailored loan solutions
            </p>
            <p className="text-gray-500 mb-4 sm:ml-10">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </p>
            <p className="text-[#57009C] font-medium sm:ml-10">
              <a href="/products/dealer-inventory-loans">Learn more -&gt;</a>
            </p>
            <div className="flex items-center gap-6 mb-4">
              <FaCircleDollarToSlot color="bg-[#7E3AF2]" />
              <p className="text-xl font-bold">Dealership Management System</p>
            </div>
            <p className="text-[#7E3AF2] my-4 font-medium sm:ml-10">
              Enhance Efficiency and Sales with free digital tools for car
              dealerships
            </p>
            <p className="text-gray-500 mb-4 sm:ml-10">
              OneLot offers a suite of powerful digital tools designed to
              optimize your dealership's operations.
            </p>
            <p className="text-[#57009C] font-medium sm:ml-10">
              <a href="/products/dealer-management-system">Learn more -&gt;</a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row p-2 gap-5 w-full h-[500px]  border-black">
        <div className="flex  mt-12 ">
          <div>
            <img src="https://www.onelot.ph/carfinancing.png" />
          </div>
        </div>
        <div className="flex p-2 w-[800px] justify-between">
          <div className="mb-3 2xl:pr-40 ml-4 sm:pt-10">
            <div className="py-3 sm:py-0">
              <p className="text-4xl font-extrabold text-black">
                Car Financing
              </p>
              <p className="text-xl font-semibold my-4 text-black">
                Dealer Inventory Loans
              </p>
              <p className="text-gray-500 font-normal sm:text-xl">
                OneLot’s working capital loans allows car dealer to buy more
                cars and capitalize on car purchase opportunities you would
                otherwise have missed. We transfer the money to your account
                within 6 hours.
              </p>
              <hr className="my-7" />
              <div className="font-medium text-black">
                <div className="flex items-center gap-4">
                  <FaCircleDollarToSlot />
                  <p>
                    Interest as low as 1.5% per month with daily calculation of
                    interest
                  </p>
                </div>
                <div className="flex items-center gap-4 my-2">
                  <FaCircleDollarToSlot />
                  <p>Financing up to 70% of the vehicle purchase</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaCircleDollarToSlot />
                  <p>
                    Financing period up to 90 days with flexible repayment
                    schedule at any point
                  </p>
                </div>
              </div>
              <hr className="my-7" />
              <p className="text-gray-500 font-normal sm:text-xl">
                Use OneLot's financing solution today, grow the number of cars
                in your lot and increase your profits
              </p>
            </div>
            <button
              type="button"
              className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent enabled:hover:bg-[#3F0473] focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg focus:ring-2 mt-6 mb-4 sm:mb-0"
            >
              <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
                <a href="/products/dealer-inventory-loans">View Loans -&gt;</a>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-44 ">
        <hr />
        <div className="flex flex-col sm:flex-row  bg-gray-50 sm:py-16 py-5 pb-4 px-4 sm:px-0">
          <div className="flex-1 order-1 md:order-2">
            <div className="w-full md:w-3/4 md:ml-20">
              <div>
                <p className="sm:text-4xl text-3xl font-extrabold sm:w-5/6 mb-4 text-black">
                  Dealership Management System
                </p>
                <p className="text-gray-500 font-normal sm:text-xl">
                  OneLot’s digital platform has been built with the single goal
                  to help used car dealers operate their businesses more
                  efficiently.
                </p>
                <hr className="my-7" />
                <div className="font-medium">
                  <div className="flex items-center gap-2">
                    <FaCircleCheck size={30} />
                    <p>
                      <span className="font-bold">Inventory Management:</span>{" "}
                      Track all details about your cars and sales in one place -
                      from car details to buyers. All you need to know in one
                      place
                    </p>
                  </div>
                  <div className="flex items-center gap-2 my-2">
                    <FaCircleCheck size={40} />
                    <p>
                      <span className="font-bold">Marketing Tools:</span>{" "}
                      Promote your cars across all different platforms. Write a
                      marketing text and upload it on Facebook Marketplace,
                      Groups, Pages, and Instagram with a single click of a
                      button
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCircleCheck size={40} />
                    <p>
                      <span className="font-bold">
                        Marketing Insights (Coming Soon):
                      </span>{" "}
                      Get insights on prices and volumes for all cars in the
                      market. We provide you all the data by combining data from
                      various sources with a single click of a button
                    </p>
                  </div>
                </div>
                <hr className="my-7" />
                <p className="text-gray-500 sm:text-xl font-normal">
                  Sign-up OneLot's dealer platform today and sell your cars
                  easier.
                </p>
                <button
                  type="button"
                  className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-[#57009C] border border-transparent enabled:hover:bg-[#3F0473] focus:ring-transparent dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900 rounded-lg focus:ring-2 mt-6 mb-4 sm:mb-0"
                >
                  <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
                    <a href="/products/dealer-management-system">
                      Explore Now -&gt;
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-none order-3 md:order-3">
            <img src="https://www.onelot.ph/dmscontent.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EverythingComponent;
