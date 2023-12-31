import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationSelection
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart" dark={true} />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          textRender={(args) => {
            args.text += ' cal';
          }}
          legendSettings={{ textStyle: { color: (currentMode === 'Dark'? 'white': '') }}}
        >
          <Inject
            services={[
              AccumulationLegend,
              PyramidSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              name="Food"
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              explode
              explodeOffset="20px"
              dataLabel={{ visible: true }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
