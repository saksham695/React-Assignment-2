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
      <div className="list-wrapper">
        <div className="list-container">
          {item.items.map((itr, i) => {
            const HEADING_COLOR = i === position ? "pink" : "lightblue";
            return (
              <ShowListItem
                backgroundColor={HEADING_COLOR}
                key={i}
                listItems={itr}
                onClick={this.handleChange(i)}
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
