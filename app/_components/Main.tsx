"use client";
import Image from "next/image";
import weekImg from "@/public/images/week.png";
import starSM from "@/public/images/star-sm.png";
import fishPlayFootballImg from "@/public/images/fish-play-football.png";

import CustomDateField from "./DateField";
import { useState } from "react";

type WeekPlan = {
  id: number;
  week: number;
  days: number;
  price: number;
};

const WEEK_PLAN = [
  { id: 1, week: 1, days: 5, price: 35 },
  { id: 2, week: 2, days: 10, price: 70 },
  { id: 3, week: 3, days: 15, price: 105 },
  { id: 4, week: 4, days: 20, price: 140 },
];

const Main = () => {
  const [week, setWeek] = useState<WeekPlan | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <section className="">
      <div className="bg-gradient-to-t from-[#5D06E9]/20 via-[#1C1DF6]/10 to-transparent py-[96px] relative overflow-hidden">
        <Image
          className="absolute top-0 left-1/2 -translate-x-1/2 "
          src={starSM}
          alt="star"
        />
        <Image
          className="absolute -bottom-5 left-[4%] z-[-1] "
          src={fishPlayFootballImg}
          alt="fish playing football"
        />

        {/* Content */}
        <div className="container space-y-[48px] relative z-20">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.19209e-07 5.9697L6.01714 0L6.74536 0.657985L1.42318 5.9382L7 10.9772L6.30504 11.6667L1.19209e-07 5.9697Z"
                  fill="#555555"
                />
              </svg>

              <p className="text-[#555] font-light">
                Regular aftercare program
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] text-[#070012] font-medium">
              How many weeks you like to continue?
            </h2>
            <p className="text-[#555] font-light">
              Based on your selection Mon, Tue, Thu, Fri, Sat{" "}
            </p>
          </div>

          {/* Select */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WEEK_PLAN.map((plan) => (
              <button
                onClick={() =>
                  week?.id === plan.id ? setWeek(null) : setWeek(plan)
                }
                key={plan.id}
                className="btn grid place-items-center p-6 rounded-lg border border-[#DDDDDD] bg-white space-y-6 relative"
              >
                <Image src={weekImg} alt="week" />
                <div
                  className={`size-4.5 rounded-full grid place-items-center  absolute top-6 right-6 ${
                    week?.id === plan.id
                      ? "bg-[#852DFE]"
                      : "border border-[#ddd]"
                  }`}
                >
                  {week?.id === plan.id && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.32194 8.00002L0 4.59576L1.16268 3.40427L3.32194 5.61704L8.80314 0L9.96582 1.19149L3.32194 8.00002Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <div className="text-center space-y-2">
                  <h5 className="text-[15px] font-medium text-[#070012] leading-3">
                    {plan.week} week
                  </h5>
                  <p className="text-[13px] font-light text-[#555]">
                    ${plan.price} for {plan.days} days
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* DatePicker */}
          {week?.id && (
            <div className="grid place-items-center gap-4 p-6 rounded-lg border border-[#DDDDDD] bg-white space-y-4 ">
              <div className="py-5 text-center space-y-2">
                <p className="text-[15px] text-[#070012] uppercase ">
                  {week.week} weeks
                </p>
                <p className="text-[13px] font-light text-[#555]">
                  ({week.week} Weeks X 5 Days) = {week.days} Days
                </p>
              </div>

              <div className="w-full flex gap-6 ">
                <CustomDateField
                  value={startDate}
                  onChange={setStartDate}
                  label="Start Date"
                />
                {startDate && (
                  <CustomDateField
                    value={startDate}
                    onChange={setStartDate}
                    label="End Date"
                  />
                )}
              </div>
            </div>
          )}

          <svg
            className={`absolute -right-8  z-[-1] ${
              week?.id ? "bottom-[29%]" : "bottom-[10%]"
            }`}
            width="95"
            height="90"
            viewBox="0 0 95 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.0324 0L58.1352 34.171H94.0648L64.9971 55.2899L76.1 89.4609L47.0324 68.3421L17.9648 89.4609L29.0676 55.2899L-1.90735e-05 34.171H35.9295L47.0324 0Z"
              fill="url(#paint0_linear_1_148)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_148"
                x1="46.8977"
                y1="0.00367974"
                x2="49.2276"
                y2="80.3571"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFD900" />
                <stop offset="1" stop-color="#FF9C11" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom */}
      <div className="container py-8 flex items-center justify-between gap-5">
        <p className="font-semibold text-[#070012] uppercase ">
          ${week?.price} for {week?.days} Days (1 Activity per Day)
        </p>
        <div className="flex gap-6 items-center">
          <button className="btn">Back</button>
          <button className="btn-primary">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Main;
