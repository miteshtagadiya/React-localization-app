import * as React from "react";
import { Chart } from "react-google-charts";

const GeoMap = props => {
  const chartEvents = [
    {
      eventName: "select",
      callback({ chartWrapper }) {
        let selection = chartWrapper.getChart().getSelection()[0];
        if (selection) {
          let label = props.rows[Object.values(selection)[0]][0];
          console.log(label);
        }
      }
    }
  ];

  return (
    <Chart
      className="custom-charts"
      //      width={"500px"}
      height={props.height ? props.height : "300px"}
      width={props.width ? props.width : "auto"}
      //width={props.width ? props.width : "100%"}
      chartType="GeoChart"
      rows={props.rows}
      columns={props.columns}
      chartEvents={chartEvents}
      enableRegionInteractivity={true}
      // data={[
      //   ["State", "Popularity"],
      //   ["Gujarat", 200],
      //   ["Rajasthan", 300],
      //   ["Punjab", 400],
      //   ["Delhi", 500],
      //   ["Hariyana", 600],
      //   ["Maharashtra", 700],
      //   // ["City", "Popularity"],
      //   // ["Surat", 200],
      //   // ["Ahmedabad", 300],
      //   // ["Mumbai", 400],
      //   // ["Vadodara", 500],
      //   // ["Jaipur", 600],
      //   // ["Pune", 700],
      // ]}
      options={{
        // resolution: "provinces",

        region: props.region ? props.region : null, // Africa
        colorAxis: { colors: ["#D6D0DB", "#A7A0B3", "#483A61"] },
        displayMode: props.displayMode ? props.displayMode : "region",
        // displayMode: 'region',
        backgroundColor: "white",
        datalessRegionColor: "#F0E3F4",
        forcelFrame: true,
        keepAspectRatio: false,
        legend: "none"
        // backgroundColor: '#81d4fa',
        // datalessRegionColor: '#f8bbd0',
        // defaultColor: '#f5f5f5',
      }}
      mapsApiKey="AIzaSyDtZJvmH8tjtbd2dy2Oax3u7xqIgc7P97c"
      rootProps={{ "data-testid": "1" }}
    />
  );
};
export default (GeoMap);
