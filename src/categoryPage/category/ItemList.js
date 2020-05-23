import React, { Component } from "react";
import ShowListItem from "./ShowListItem";
import ShowDescription from "./ShowDescription";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
    };
  }
  handleChange = (index) => {
    return () => {
      const { position } = this.state;
      if (position === index) {
        this.setState({ position: -1 });
      } else {
        this.setState({ position: index });
      }
    };
  };

  render() {
    const { item } = this.props;
    const { position } = this.state;

    return (
      <div style={{ display: "flex", height: "50%", width: "100%" }}>
        <div
          style={{
            width: "22%",
            height: "30%",
            marginLeft: "4.5%",
          }}
        >
          {item.items.map((itr, i) => {
            const HEADING_COLOR = i === position ? "pink" : "lightblue";
            return (
              <ShowListItem
                listItems={itr}
                key={i}
                onClick={this.handleChange(i)}
                backgroundColor={HEADING_COLOR}
              />
            );
          })}
        </div>
        {position !== -1 ? (
          <ShowDescription description={item.items[position].description} />
        ) : null}
      </div>
    );
  }
}
