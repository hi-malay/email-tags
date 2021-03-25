import React, { Component } from 'react';
import "./index.css"
import Chip from '@material-ui/core/Chip';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      chip_data: [],
      place_holder: true
    }
  }

  chipsFunc = (event, type) => {
    const chip_arr = [...this.state.chip_data];

    if (type === "add") {
      const value = event.target.value;
      if (value !== "") {
        chip_arr.push([value]);
        this.setState({ chip_data: chip_arr });
        event.target.value = "";
      }
    }

    else if (type === "delete") {
      const index = chip_arr.indexOf(event)
      if (index !== -1) {
        chip_arr.splice(index, 1);
        this.setState({ chip_data: chip_arr });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="tags-input">

          {this.state.chip_data.map((data) => {
            return (
              <div className="tag">
                <Chip
                  variant="outlined"
                  label={data}
                  data-id="delete"
                  deleteIcon={this.props.deleteIcon}
                  onDelete={() => this.chipsFunc(data, "delete")}
                />
              </div>
            );
          })}

          <input
            className={this.state.chip_data.length === 0 ? "input-style-placeholder" : "input-style"}
            type="email"
            data-id="add"
            onKeyUp={event => event.key === "Enter" ? this.chipsFunc(event, "add") : null}
            placeholder={this.state.chip_data.length === 0 ? this.props.placeholder : ""}
          />
        </div>
      </div>
    );
  }
}

export default Chips;