/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Recharts.css';

import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Polygon } from 'recharts';
//

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
const polygon = [
  {x: 45, y:100}, {x: 45, y:200}, {x: 90, y:200}, {x: 90, y:100},
];
const COLORS = ['#0088FE', '#540D6E', '#FDCA40', '#ED217C'];
class RechartsPlayground extends React.Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // };
  constructor() {
    super();
    this.state = {
      data: data01,
      arrowPosition: 0,
      arrowRotation: 0,
      points: [{x: -1, y: 1},
               {x: 1, y: 1},
               {x: 1, y: -1},
               {x: -1, y: -1}
              ]
    };
  }
  render() {
    const { data, arrowPosition, points, arrowRotation } = this.state;
    const radius = 200;
    let test = '';

    const test02 = arrowPosition * Math.PI / 180;
    const baseX = Math.sin(test02) * (180 / Math.PI);
    const baseY = Math.cos(test02) * (180 / Math.PI);
    const testPoints = [
      {x: baseX, y: baseY - 20},
      {x: baseX, y: baseY - 20},
      {x: baseX, y: baseY - 20 },
      ];
    // const formattedPoints = points.map((point) => {
    //   return {x: point.x + 15, y: point.y + 15};
    // });
    testPoints.forEach((point) => {
      test += `${Math.round(point.x)},${Math.round(point.y)} `;
    });
    console.log(`${arrowPosition} ${test}`);

    return (
      <div className={s.root}>
        <div className={s.col}>
            <ResponsiveContainer>
            <PieChart>
              <polygon transform={`translate(${radius + 35}, ${radius}) rotate(${arrowRotation})`} points={test} fill="black" stroke="green" />
              <Pie
                innerRadius={60}
                outerRadius={80}
                data={data}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell fill={COLORS[index % COLORS.length]} />
                ))}

              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={s.col}>
          <button
            onClick={() => {
              this.setState({ data: data01 });
            }}
          >
            data 1
          </button>
          <button
            onClick={() => {
              this.setState({ data: data02 });
            }}
          >
            data2
          </button>
          <input onChange={(e) => {this.setState({arrowPosition: e.target.value})}} type="range" min="0" max="360" value={arrowPosition} />
          <input onChange={(e) => {this.setState({arrowRotation: e.target.value})}} type="range" min="0" max="360" value={arrowRotation} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(RechartsPlayground);
