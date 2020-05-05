import React from "react";
import "./tabbar.css";
import { withRouter } from "react-router-dom";
class tabbar extends React.Component {
  render() {
    return (
      <div className="tabbar">
        {this.state.tabbarList.map((item, index) => {
          return (
            <div
              className="tabbar_list"
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
          path: "/home",
        },
        {
          name: "列表",
          path: "/musicList",
        },
        {
          name: "我的",
          path: "",
        },
      ],
    };
  }
  changePath = (path) => {
    console.log(path);
    this.props.history.push(path);
  };
}

export default withRouter(tabbar);
