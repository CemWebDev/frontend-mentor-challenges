import patternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import iconDice from "../assets/images/icon-dice.svg";
import { useState, useEffect } from "react";

const Box = () => {
  const [adviceData, setAdviceData] = useState({ advice: "", id: "" });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setAdviceData({
        advice: data.slip.advice,
        id: data.slip.id.toString(),
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="py-16 px-6 bg-neutral-darkGrayishBlue rounded-2xl max-w-[350px] sm:max-w-[550px] w-full font-manrope relative flex flex-col items-center gap-6 text-center">
      <h1 className="text-primary-neonGreen tracking-widest uppercase text-lg font-bold">
        Advice #{adviceData.id}
      </h1>
      <div className="text-primary-lightCyan leading-7 text-quote font-semibold">
        {adviceData.advice ? adviceData.advice : "Loading..."}
      </div>
      <img
        src={patternDividerDesktop}
        alt="Pattern Divider"
        className="hidden sm:block"
      />
      <img
        src={patternDividerMobile}
        alt="Pattern Divider"
        className="sm:hidden block"
      />
      <div className="bg-primary-neonGreen w-16 h-16 rounded-full flex items-center justify-center absolute -bottom-10 cursor-pointer transition-shadow duration-300 hover:shadow-neon-green">
        <img src={iconDice} alt="Icon Dice" onClick={fetchAdvice} />
      </div>
    </div>
  );
};

export default Box;
