import * as React from "react";
import { Select, Theme } from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts/index";

const SelectWrap = styled.div`
  margin: 10px;
  display: inline-block;
`;

const data = [
  {
    value: "lugia-A",
    text: "杰尼龟",
    disabled: true
  },
  {
    value: "lugia-B",
    text: "火恐龙"
  },
  {
    value: "lugia-C",
    text: "绿毛虫"
  },
  {
    value: "lugia-D",
    text: "独角虫"
  },
  {
    value: "lugia-E",
    text: "皮卡丘"
  }
];
export default class DefaultSelect extends React.Component {
  render() {
    const config = {
      [Widget.Select]: {
        Container: {
          normal: {
            width: 250,
            height: 30
          }
        }
      }
    };

    return (
      <Theme config={config}>
        <SelectWrap>
          <Select autoHeight data={data} />
        </SelectWrap>

        <SelectWrap>
          <Select disabled data={data} defaultValue={"lugia-E"} />
        </SelectWrap>
      </Theme>
    );
  }
}
