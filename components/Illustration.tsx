import React from "react";

interface IProps {
  source: string;
  className: string;
  sectionId?: string;
}

const Illustration = ({ source, className, sectionId }: IProps) => {
  return (
    <div className={className} id={sectionId}>
      <img src={source} className="mx-auto" />
    </div>
  );
};

export default Illustration;
