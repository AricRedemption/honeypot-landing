"use client";
import React from "react";
import { motion, AnimationProps, MotionProps } from "framer-motion";
export default function ChartSvg() {
  const timeFrame = [0, 0.2, 0.6, 0.8, 1];
  const duration = 6;

  const dotsVariants = {
    animate: {
      transition: {
        times: timeFrame,
        duration: duration,
        staggerChildren: 0.05,
      },
    },
  };

  const dotAnimation = {
    animate: {
      opacity: [0, 1, 1, 0, 0],
      y: [-50, 0, 0, 0, 0],
      fill: "yellow",
      transition: {
        times: timeFrame,
        duration: duration,
        repeat: Infinity,
      },
    },
  };

  const dotProps: MotionProps = {
    variants: dotAnimation,
  };
  return (
    <svg
      width={571}
      height={200}
      viewBox="0 0 571 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[90%] h-[90%] self-center"
    >
      {" "}
      <defs>
        <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <motion.stop
            offset="0%"
            stopOpacity={0.5}
            style={{
              stopColor: "rgb(253,226,82)",
            }}
            animate={{
              offset: [0, 0, 1, 1, 0],
              stopOpacity: [0.5, 0.5, 0.5, 0, 0],
            }}
            transition={{
              times: timeFrame,
              duration: duration,
              repeat: Infinity,
            }}
          />
          <motion.stop
            style={{
              stopColor: "rgb(253,226,82)",
            }}
            animate={{
              offset: [0.0, 1, 1, 1, 0],
              stopOpacity: [0, 0.15, 0.15, 0, 0],
            }}
            transition={{
              times: timeFrame,
              duration: duration,
              repeat: Infinity,
            }}
          />

          <motion.stop
            offset="100%"
            style={{
              stopColor: "rgb(253,226,82,0)",
              stopOpacity: 0.0,
            }}
          />
        </linearGradient>
      </defs>
      <g id="chart">
        <motion.path
          id="fill"
          d="M4.55556 120.952C4.55556 120.952 24.4222 147.944 37.6667 147.944C50.9111 147.944 57.5333 117.096 70.7778 113.24C84.0222 109.384 90.6444 113.24 103.889 109.384C117.133 105.528 123.756 84.32 137 84.32C150.244 84.32 156.867 95.888 170.111 103.6C183.356 111.312 189.978 122.88 203.222 122.88C216.467 122.88 223.089 74.68 236.333 74.68C249.578 74.68 256.2 113.24 269.444 115.168C282.689 117.096 289.311 117.096 302.556 117.096C315.8 117.096 322.422 104.371 335.667 95.888C348.911 87.4048 355.533 74.68 368.778 74.68C382.022 74.68 388.644 90.104 401.889 90.104C415.133 90.104 421.756 39.976 435 39.976C448.244 39.976 454.867 107.456 468.111 107.456C481.356 107.456 487.978 68.5104 501.222 53.472C514.467 38.4336 521.089 41.1328 534.333 32.264C547.578 23.3952 567.444 9.12799 567.444 9.12799V200C567.444 200 547.578 200 534.333 200C521.089 200 514.467 200 501.222 200C487.978 200 481.356 200 468.111 200C454.867 200 448.244 200 435 200C421.756 200 415.133 200 401.889 200C388.644 200 382.022 200 368.778 200C355.533 200 348.911 200 335.667 200C322.422 200 315.8 200 302.556 200C289.311 200 282.689 200 269.444 200C256.2 200 249.578 200 236.333 200C223.089 200 216.467 200 203.222 200C189.978 200 183.356 200 170.111 200C156.867 200 150.244 200 137 200C123.756 200 117.133 200 103.889 200C90.6444 200 84.0222 200 70.7778 200C57.5333 200 50.9111 200 37.6667 200C24.4222 200 4.55556 200 4.55556 200V120.952Z"
          fill="url(#lgrad)"
        />
        <motion.path
          id="line"
          d="M4.55556 120.952C4.55556 120.952 24.4222 147.944 37.6667 147.944C50.9111 147.944 57.5333 117.096 70.7778 113.24C84.0222 109.384 90.6444 113.24 103.889 109.384C117.133 105.528 123.756 84.32 137 84.32C150.244 84.32 156.867 95.888 170.111 103.6C183.356 111.312 189.978 122.88 203.222 122.88C216.467 122.88 223.089 74.68 236.333 74.68C249.578 74.68 256.2 113.24 269.444 115.168C282.689 117.096 289.311 117.096 302.556 117.096C315.8 117.096 322.422 104.371 335.667 95.888C348.911 87.4048 355.533 74.68 368.778 74.68C382.022 74.68 388.644 90.104 401.889 90.104C415.133 90.104 421.756 39.976 435 39.976C448.244 39.976 454.867 107.456 468.111 107.456C481.356 107.456 487.978 68.5104 501.222 53.472C514.467 38.4336 521.089 41.1328 534.333 32.264C547.578 23.3952 567.444 9.12799 567.444 9.12799"
          stroke="#E99558"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            pathLength: [0, 1, 1, 0, 0],
            pathOffset: [0, 0, 0, 1, 0],
            opacity: [1, 1, 1, 0, 0],
          }}
          transition={{
            times: timeFrame,
            duration: duration,
            repeat: Infinity,
          }}
        />
        <motion.g id="dots" variants={dotsVariants} animate={"animate"}>
          <motion.path
            id="Vector"
            d="M4 125C2.93931 125 1.92204 124.579 1.17193 123.829C0.42181 123.079 0.000265298 122.062 1.25181e-07 121.001C-0.000265048 119.94 0.420771 118.923 1.17051 118.173C1.92025 117.422 2.93731 117.001 3.998 117C5.05869 116.999 6.07617 117.42 6.82666 118.17C7.57715 118.919 7.9992 119.936 8 120.997C8.00079 122.058 7.58027 123.075 6.8309 123.826C6.08153 124.577 5.06469 124.999 4.004 125H4Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_2"
            d="M37 152C35.9393 152 34.922 151.579 34.1719 150.829C33.4218 150.079 33.0003 149.062 33 148.001C32.9997 146.94 33.4208 145.923 34.1705 145.173C34.9203 144.422 35.9373 144.001 36.998 144C38.0587 143.999 39.0762 144.42 39.8267 145.17C40.5772 145.919 40.9992 146.936 41 147.997C41.0008 149.058 40.5803 150.075 39.8309 150.826C39.0815 151.577 38.0647 151.999 37.004 152H37Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_3"
            d="M70 117C68.9393 117 67.922 116.579 67.1719 115.829C66.4218 115.079 66.0003 114.062 66 113.001C65.9997 111.94 66.4208 110.923 67.1705 110.173C67.9203 109.422 68.9373 109.001 69.998 109C71.0587 108.999 72.0762 109.42 72.8267 110.17C73.5772 110.919 73.9992 111.936 74 112.997C74.0008 114.058 73.5803 115.075 72.8309 115.826C72.0815 116.577 71.0647 116.999 70.004 117H70Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_4"
            d="M103 113C101.939 113 100.922 112.579 100.172 111.829C99.4218 111.079 99.0003 110.062 99 109.001C98.9997 107.94 99.4208 106.923 100.171 106.173C100.92 105.422 101.937 105.001 102.998 105C104.059 104.999 105.076 105.42 105.827 106.17C106.577 106.919 106.999 107.936 107 108.997C107.001 110.058 106.58 111.075 105.831 111.826C105.082 112.577 104.065 112.999 103.004 113H103Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_5"
            d="M137 88C135.939 88 134.922 87.5787 134.172 86.8288C133.422 86.0789 133 85.0617 133 84.001C133 82.9403 133.421 81.9229 134.171 81.1726C134.92 80.4223 135.937 80.0005 136.998 80C138.059 79.9995 139.076 80.4203 139.827 81.1698C140.577 81.9194 140.999 82.9363 141 83.997C141.001 85.0577 140.58 86.0753 139.831 86.826C139.082 87.5766 138.065 87.9989 137.004 88H137Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_6"
            d="M170 108C168.939 108 167.922 107.579 167.172 106.829C166.422 106.079 166 105.062 166 104.001C166 102.94 166.421 101.923 167.171 101.173C167.92 100.422 168.937 100.001 169.998 100C171.059 99.9995 172.076 100.42 172.827 101.17C173.577 101.919 173.999 102.936 174 103.997C174.001 105.058 173.58 106.075 172.831 106.826C172.082 107.577 171.065 107.999 170.004 108H170Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_7"
            d="M203 127C201.939 127 200.922 126.579 200.172 125.829C199.422 125.079 199 124.062 199 123.001C199 121.94 199.421 120.923 200.171 120.173C200.92 119.422 201.937 119.001 202.998 119C204.059 118.999 205.076 119.42 205.827 120.17C206.577 120.919 206.999 121.936 207 122.997C207.001 124.058 206.58 125.075 205.831 125.826C205.082 126.577 204.065 126.999 203.004 127H203Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_8"
            d="M236 79C234.939 79 233.922 78.5787 233.172 77.8288C232.422 77.0789 232 76.0617 232 75.001C232 73.9403 232.421 72.9229 233.171 72.1726C233.92 71.4223 234.937 71.0005 235.998 71C237.059 70.9995 238.076 71.4203 238.827 72.1698C239.577 72.9194 239.999 73.9363 240 74.997C240.001 76.0577 239.58 77.0753 238.831 77.826C238.082 78.5766 237.065 78.9989 236.004 79H236Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_9"
            d="M269 119C267.939 119 266.922 118.579 266.172 117.829C265.422 117.079 265 116.062 265 115.001C265 113.94 265.421 112.923 266.171 112.173C266.92 111.422 267.937 111.001 268.998 111C270.059 110.999 271.076 111.42 271.827 112.17C272.577 112.919 272.999 113.936 273 114.997C273.001 116.058 272.58 117.075 271.831 117.826C271.082 118.577 270.065 118.999 269.004 119H269Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_10"
            d="M302 121C300.939 121 299.922 120.579 299.172 119.829C298.422 119.079 298 118.062 298 117.001C298 115.94 298.421 114.923 299.171 114.173C299.92 113.422 300.937 113.001 301.998 113C303.059 112.999 304.076 113.42 304.827 114.17C305.577 114.919 305.999 115.936 306 116.997C306.001 118.058 305.58 119.075 304.831 119.826C304.082 120.577 303.065 120.999 302.004 121H302Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_11"
            d="M335 100C333.939 100 332.922 99.5787 332.172 98.8288C331.422 98.0789 331 97.0617 331 96.001C331 94.9403 331.421 93.9229 332.171 93.1726C332.92 92.4223 333.937 92.0005 334.998 92C336.059 91.9995 337.076 92.4202 337.827 93.1698C338.577 93.9194 338.999 94.9363 339 95.997C339.001 97.0577 338.58 98.0753 337.831 98.826C337.082 99.5766 336.065 99.9989 335.004 100H335Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_12"
            d="M368 79C366.939 79 365.922 78.5787 365.172 77.8288C364.422 77.0789 364 76.0617 364 75.001C364 73.9403 364.421 72.9229 365.171 72.1726C365.92 71.4223 366.937 71.0005 367.998 71C369.059 70.9995 370.076 71.4203 370.827 72.1698C371.577 72.9194 371.999 73.9363 372 74.997C372.001 76.0577 371.58 77.0753 370.831 77.826C370.082 78.5766 369.065 78.9989 368.004 79H368Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_13"
            d="M401 94C399.939 94 398.922 93.5787 398.172 92.8288C397.422 92.0789 397 91.0617 397 90.001C397 88.9403 397.421 87.9229 398.171 87.1726C398.92 86.4223 399.937 86.0005 400.998 86C402.059 85.9995 403.076 86.4202 403.827 87.1698C404.577 87.9194 404.999 88.9363 405 89.997C405.001 91.0577 404.58 92.0753 403.831 92.826C403.082 93.5766 402.065 93.9989 401.004 94H401Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_14"
            d="M435 44C433.939 44 432.922 43.5787 432.172 42.8288C431.422 42.0789 431 41.0617 431 40.001C431 38.9403 431.421 37.9229 432.171 37.1726C432.92 36.4223 433.937 36.0005 434.998 36C436.059 35.9995 437.076 36.4203 437.827 37.1698C438.577 37.9194 438.999 38.9363 439 39.997C439.001 41.0577 438.58 42.0753 437.831 42.826C437.082 43.5766 436.065 43.9989 435.004 44H435Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_15"
            d="M468 111C466.939 111 465.922 110.579 465.172 109.829C464.422 109.079 464 108.062 464 107.001C464 105.94 464.421 104.923 465.171 104.173C465.92 103.422 466.937 103.001 467.998 103C469.059 102.999 470.076 103.42 470.827 104.17C471.577 104.919 471.999 105.936 472 106.997C472.001 108.058 471.58 109.075 470.831 109.826C470.082 110.577 469.065 110.999 468.004 111H468Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_16"
            d="M501 57C499.939 57 498.922 56.5787 498.172 55.8288C497.422 55.0789 497 54.0617 497 53.001C497 51.9403 497.421 50.9229 498.171 50.1726C498.92 49.4223 499.937 49.0005 500.998 49C502.059 48.9995 503.076 49.4203 503.827 50.1698C504.577 50.9194 504.999 51.9363 505 52.997C505.001 54.0577 504.58 55.0753 503.831 55.826C503.082 56.5766 502.065 56.9989 501.004 57H501Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_17"
            d="M534 36C532.939 36 531.922 35.5787 531.172 34.8288C530.422 34.0789 530 33.0617 530 32.001C530 30.9403 530.421 29.9229 531.171 29.1726C531.92 28.4223 532.937 28.0005 533.998 28C535.059 27.9995 536.076 28.4203 536.827 29.1698C537.577 29.9194 537.999 30.9363 538 31.997C538.001 33.0577 537.58 34.0753 536.831 34.826C536.082 35.5766 535.065 35.9989 534.004 36H534Z"
            fill="#B17500"
            {...dotProps}
          />
          <motion.path
            id="Vector_18"
            d="M567 13C565.939 13 564.922 12.5787 564.172 11.8288C563.422 11.0789 563 10.0617 563 9.001C563 7.94031 563.421 6.92294 564.171 6.17263C564.92 5.42233 565.937 5.00053 566.998 5C568.059 4.99947 569.076 5.42025 569.827 6.16981C570.577 6.91936 570.999 7.93631 571 8.997C571.001 10.0577 570.58 11.0753 569.831 11.826C569.082 12.5766 568.065 12.9989 567.004 13L567 13Z"
            fill="#B17500"
            {...dotProps}
          />
        </motion.g>
      </g>
    </svg>
  );
}
