import React from "react";
import { response } from "../response";

const index = 0;
const Rank = (props) => {
  let result = [];

  if (props.title === "default") {
    result.push(response.list);
  }

  if (props.title === "rank") {
    result.push(
      response.list.sort(function (a, b) {
        return a.rank - b.rank;
      })
    );
  }

  if (props.title === "name") {
    result.push(
      response.list.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    );
  }

  if (props.title === "points") {
    result.push(
      response.list.sort(function (a, b) {
        return a.points - b.points;
      })
    );
  }

  if (props.title === "age") {
    result.push(
      response.list.sort(function (a, b) {
        return a.age - b.age;
      })
    );
  }

  return (
    <div className="text-center mt-50">
      <div className="card mx-auto pb-20 mb-30" style={{ width: "50%" }}>
        <table className="mt-50" data-testid="app-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="numeric">Points</th>
              <th className="numeric">Age</th>
            </tr>
          </thead>
          {result[0].map((item) => (
            <tbody data-testid="app-tbody">
              <tr key={item.rank}>
                <td data-testid={`rank-${index}`}>{item.rank}</td>
                <td data-testid={`name-${index}`}>{item.name}</td>
                <td data-testid={`points-${index}`} className="numeric">
                  {item.points}
                </td>
                <td data-testid={`age-${index}`} className="numeric">
                  {item.age}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Rank;
