import React from "react";

const Panel = ({ children, flex, responsiveWidth }) => {
  return (
    <div className={`flex-${flex} md:flex-${responsiveWidth}`}>{children}</div>
  );
};

const SplitScreen = ({ children, leftWidth, rightWidth, responsiveWidth }) => {
  const [left, right] = children;
  return (
    <div className="flex max-w-[90%] m-auto mt-10 jusitfy-center items-center">
      <Panel flex={leftWidth} responsiveWidth={responsiveWidth}>
        {left}
      </Panel>
      <Panel flex={rightWidth} responsiveWidth={responsiveWidth}>
        {right}
      </Panel>
    </div>
  );
};

export default SplitScreen;
