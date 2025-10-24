import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div
            className="mx-auto mb-6 flex items-center justify-center"
            style={{ width: "96px", height: "96px" }}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                className="stroke-[#2c5f5f] dark:stroke-[#6eddd6]"
                strokeWidth="3"
              />
              <circle
                cx="100"
                cy="100"
                r="82"
                fill="none"
                className="stroke-[#d4af37] dark:stroke-[#f5e1a3]"
                strokeWidth="1.5"
              />
              <g transform="translate(100, 100)">
                <path
                  d="M -15 -20 L -10 -35 L -8 -20 Z"
                  className="fill-[#2c5f5f] dark:fill-[#6eddd6]"
                />
                <path
                  d="M 15 -20 L 10 -35 L 8 -20 Z"
                  className="fill-[#2c5f5f] dark:fill-[#6eddd6]"
                />
                <path
                  d="M -18 -15 Q -20 0 -15 10 Q -10 15 0 18 Q 10 15 15 10 Q 20 0 18 -15 Q 15 -22 0 -25 Q -15 -22 -18 -15 Z"
                  className="fill-[#2c5f5f] dark:fill-[#6eddd6]"
                />
              </g>
            </svg>
          </div>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            I Know the Games. I'm Here to End Them.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 dark:text-slate-300">
          <p>
            I grew up in the car dealership world. My family was in the business
            for over 40 years.
          </p>

          <p>
            I saw it all: the fine print tactics, the pressure techniques, the
            "add-ons" that mysteriously appeared on contracts. I watched
            customers—mostly women—walk out feeling{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              confused, pressured, and invisible
            </span>
            .
          </p>

          <p>
            Years later, when I went to buy my own car, I thought I'd be fine. I
            knew the industry inside and out. I had all the knowledge and tools
            at my fingertips.
          </p>

          <p className="font-semibold text-slate-900 dark:text-white">
            But the moment I walked onto that lot as a woman buying alone,
            everything changed.
          </p>

          <p>
            I was talked down to. Dismissed. Treated like I couldn't possibly
            understand "the numbers." Even with all my insider knowledge,{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              I felt what every woman feels walking into a dealership: like I
              needed an expert advisor or friend in my corner who would tell me
              what to look out for.
            </span>
          </p>

          <p>That's when I knew I had to do something different.</p>

          <p className="text-xl font-semibold text-slate-900 dark:text-white">
            So I'm using my insider knowledge to level the playing field.
          </p>

          <p>
            Foxline exists because{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              you deserve transparency before you sign
            </span>
            . You deserve to know exactly what you're paying for, what's
            negotiable, and what's a red flag—without feeling intimidated or
            talked down to.
          </p>

          <p>I've seen both sides. Now I'm on yours.</p>

          <p className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
            — Founder, Foxline
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
