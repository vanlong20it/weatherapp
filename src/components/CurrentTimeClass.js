import React from "react";

class CurrentTimeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };
    setInterval(() => {
      this.setState({ ...this.state, time: new Date() });
      this.setState({ ...this.state, day: new Date().getDate() });
      this.setState({ ...this.state, month: new Date().getMonth() + 1 });
      this.setState({ ...this.state, year: new Date().getFullYear() });
    }, 500);
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.state.time.toLocaleTimeString()}, ngày {this.state.day}, tháng {this.state.month}, năm {this.state.year}</p>
      </React.Fragment>
    );
  }
}

export default CurrentTimeClass;