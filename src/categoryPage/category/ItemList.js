import React, { Component } from "react";

import ShowDescription from "./ShowDescription";
import ShowListItem from "./ShowListItem";

import "./Category.css";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNumberDisplay: -1,
    };
  }
  handleChange = (index) => {
    return () => {
      const { categoryNumberDisplay } = this.state;
      if (categoryNumberDisplay === index) {
        this.setState({ categoryNumberDisplay: -1 });
      } else {
        this.setState({ categoryNumberDisplay: index });
      }
    };
  };

  render() {
    const { item } = this.props;
    const { categoryNumberDisplay } = this.state;
    return (
      <div className="list-wrapper">
        <div className="list-container">
          {item.items.map((itemList, index) => {
            const HEADING_COLOR =
              index === categoryNumberDisplay ? "pink" : "lightblue";
            return (
              <ShowListItem
                backgroundColor={HEADING_COLOR}
                key={itemList.id}
                listItems={itemList}
                onClick={this.handleChange(index)}
              />
            );
          })}
        </div>
        {categoryNumberDisplay !== -1 ? (
          <ShowDescription
            description={item.items[categoryNumberDisplay].description}
          />
        ) : null}
      </div>
    );
  }
}
