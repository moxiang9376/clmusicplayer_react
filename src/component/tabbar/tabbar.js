import React from "react";
import "./tabbar.min.css";
import { withRouter } from "react-router-dom";
class tabbar extends React.Component {
  render() {
    return (
      <div className="tabbar">
        {this.state.tabbarList.map((item, index) => {
          return (
            <div
              className={item.style ? "color_green" : "tabbar_list"}
              onClick={() => this.changePath(item.path)}
              key={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      tabbarList: [
        {
          name: "首页",
          path: "/",
          style: true,
        },
        {
          name: "列表",
          path: "/musicList",
          style: false,
        },
        {
          name: "我的",
          path: "",
          style: false,
        },
      ],
    };
  }
  changePath = (path) => {
    console.log(path);
    this.props.history.push(path);
    this.state.tabbarList.forEach((item, index) => {
      if (item.path != path) {
        item.style = false;
      } else {
        item.style = true;
      }
    });
    console.log(this.state.tabbarList);
  };
}

export default withRouter(tabbar);
