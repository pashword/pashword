import React from "react";

interface IProps {
  source: string;
  className: string;
}

const Illustration = ({ source, className }: IProps) => {
  return (
    <div className={className}>
      <img src={source} className="mx-auto" />
    </div>
  );
};

export default Illustration;
