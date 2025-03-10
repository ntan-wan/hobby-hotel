import { useState } from "react";
import { cn } from "@/lib/utils";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface CustomRangeSliderProps extends React.ComponentProps<typeof RangeSlider> {
  onChange: (value: [number, number]) => void;
}
export const CustomRangeSlider = ({ onChange = () => {}, className, ...props }: CustomRangeSliderProps) => {
  //# VARIABLES
  const min = 0;
  const max = 550;

  //# STATES
  const [value, setValue] = useState<[number, number]>([min, max]);
  //# EVENT HANDLERS
  const handleInput = (value: [number, number]) => {
    setValue(value);
    onChange(value);
  };

  return <RangeSlider min={min} max={max} {...props} value={value} onInput={handleInput} className={cn("custom-range-slider", className)} />;
};
