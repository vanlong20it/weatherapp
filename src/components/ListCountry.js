import React from "react";
import styled from "styled-components";
import "../fontawesome/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import device from "./Device";

const Table = styled.table`
  font-size: 16px;
  color: #fff;
  width: 100%;
  .temp,
  .hum {
    text-align: center;
  }
  thead {
    position: sticky;
    top: 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: green;
    cursor: pointer;
    .ico {
      display: block;
      font-size: 12px;
    }
    td {
      padding: 5px;
    }
    td:hover {
      background-color: #00000040;
    }
  }
  tbody {
    font-size: 16px;
  }
  tbody tr{
    cursor: pointer;
    transition:all .2s ease-out;
    &:hover{
      background-color: #ffffff50;
    }
  }
  @media ${device.desktop} {
    font-size: 12px;
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
    transition: all 1s ease-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
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
                  Thành phố
                  <span className="ico">
                    <i className="fas fa-city"></i>
                  </span>
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
                  Nhiệt độ
                  <span className="ico">
                    <i className="fas fa-temperature-low"></i>
                  </span>
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
                  Độ ẩm
                  <span className="ico">
                    <i className="fas fa-tint"></i>
                  </span>
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
