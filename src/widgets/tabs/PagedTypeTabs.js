/**
 *
 * create by liangguodong
 *
 */
import React from "react";
import { Theme, tabs, Select } from "@lugia/lugia-web";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";

const TabPane = tabs.TabPane;
const Tabs = tabs.Tabs;

const Wrapper = styled.div`
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
  display: inline-block;
`;
export const hasActivityKeyData = [
  {
    title: 1111,
    content: <div>1111111</div>,
    activityKey: "0"
  },
  {
    title: 222222,
    content: (
      <div>
        <div>222222</div>
      </div>
    ),
    activityKey: "1"
  },
  {
    activityKey: "2",
    title: 3333,
    content: (
      <div>
        <div>
          <div>33333</div>
        </div>
      </div>
    )
  },
  {
    activityKey: "3",
    title: 44444,
    content: (
      <div>
        <div>
          <div>44444</div>
          <div>44444</div>
        </div>
      </div>
    )
  },
  {
    activityKey: "4",
    title: 55555,
    content: 55555
  },
  {
    activityKey: "5",
    title: 66666,
    content: 66666
  },
  {
    activityKey: "6",
    title: 777777,
    content: 77777
  },
  {
    activityKey: "7",
    title: 888888,
    content: 888888
  }
];
export default class PagedTypeTabs extends React.Component<any, any> {
  render() {
    const view = {
      [Widget.Tabs]: {
        width: 500,
        height: 200
      }
    };

    const onPreClick = e => {};
    const onNextClick = e => {};
    return (
      <Theme config={view}>
          <Wrapper>
            <p>翻单个标签页</p>
            <Tabs
              tabType={"card"}
              pagedType={"single"}
              data={hasActivityKeyData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
          </Wrapper>
          <br />
          <Wrapper>
            <p>翻整页</p>
            <Tabs
              tabType={"card"}
              pagedType={"page"}
              data={hasActivityKeyData}
              onPreClick={onPreClick}
              onNextClick={onNextClick}
            />
        </Wrapper>
      </Theme>
    );
  }
}