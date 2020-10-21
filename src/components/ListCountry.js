// import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import "../fontawesome/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = styled.table`
  font-size: 18px;
  color: #fff;
  width: 100%;
  thead {
    font-weight: bold;
    color: green;
  }
  .temp,
  .hum {
    text-align: center;
  }
  thead {
    text-align:center;
    background-color: #fff;
    cursor: pointer;
    .ico{
      display:block;
    }
  }
  tbody {
    font-size: 16px;
  }
  tbody tr:hover {
    background-color: #ffffff50;
    cursor: pointer;
  }
`;

const StyleList = styled.div`
  height: 420px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    transition:all .5s ease-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
  border-radius: 5px;
  background-color: #00000050;
  .sort {
    padding: 10px 0px 20px;
  }
`;

const keys = {
  city: "city",
  temp: "temp",
  hum: "humidity",
};
class ListCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      cityUp: false,
      tempUp: false,
      humUp: false,
    };
    this.sortList = this.sortList.bind(this);
  }
  sortList = (arr, key, up) => {
    arr.sort((a, b) => {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }
      return 0;
    });
    if (!up) {
      arr.reverse();
    }
    this.setState({ list: arr });
  };
  render() {
    return (
      <React.Fragment>
        <StyleList>
          <Table className="table table-borderless">
            <thead>
              <tr>
                <td
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: !this.state.cityUp,
                        tempUp: false,
                        humUp: false,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.city,
                          this.state.cityUp
                        );
                      }
                    );
                  }}
                >
                  Thành phố<span className="ico"><i className="fas fa-city"></i></span>
                </td>
                <td
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: false,
                        tempUp: !this.state.tempUp,
                        humUp: false,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.temp,
                          this.state.tempUp
                        );
                      }
                    );
                  }}
                >
                  Nhiệt độ<span className="ico"><i className="fas fa-temperature-low"></i></span>
                </td>
                <td
                  onClick={() => {
                    this.setState(
                      {
                        cityUp: false,
                        tempUp: false,
                        humUp: !this.state.humUp,
                      },
                      () => {
                        this.sortList(
                          this.props.list,
                          keys.hum,
                          this.state.humUp
                        );
                      }
                    );
                  }}
                >
                  Độ ẩm<span className="ico"><i className="fas fa-tint"></i></span>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    this.props.getLocalData(item.city, this.props.list);
                  }}
                >
                  <td>{item.city}</td>
                  <td className="temp">
                    {Math.floor(item.temp - 273.15)}&#176;C
                  </td>
                  <td className="hum">{item.humidity}%</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </StyleList>
      </React.Fragment>
    );
  }
}

export default ListCountry;
