/* eslint-disable react/prop-types */
import { useState } from "react";

// import BarChartCo from "./BarChart";
// import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChartContainer from "./BarChartContainer";
import AreaChartContainer from "./AreaChartContainer";

const ChartContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartContainer data={data} />
      ) : (
        <AreaChartContainer data={data} />
      )}
    </Wrapper>
  );
};
export default ChartContainer;
