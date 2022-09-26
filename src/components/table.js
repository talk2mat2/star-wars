import React from "react";

const Table = ({ charact = [], title }) => {
  const [assend, setAssend] = React.useState(true);
  const [staged, setStaged] = React.useState([]);

  const filterSex = (event) => {
    const sex = event.target.value;
    if (sex === "all") {
      return setStaged(charact);
    }
    let gender = charact.filter((item) => item?.gender === sex);
    gender?.length && setStaged(gender);
  };

  const sumHeight = () => {
    const heightCm = staged?.reduce((a, b) => a + parseInt(b.height), 0) || "";
    if (heightCm) {
      let heightin = heightCm / 2.54;
      let heightft = Math.floor(heightin / 12);
      let inch = heightin - 12 * heightft;
      return `${
        heightCm + "cm" + "(" + heightft + "ft/" + inch?.toFixed(2) + "in)"
      }`;
    }
    return "an invalid invalid height exist";
  };

  React.useEffect(() => {
    setStaged(charact);
  }, [charact]);
  return (
    <div id="tableContainer">
      <div className="d-flex flex-row justify-between items-center flex-wrap">
        {title && <h3>{title} Character list</h3>}{" "}
        <p>{assend ? <i class="bi bi-caret-down"></i> : <i class="bi bi-caret-up"></i>}</p>
        <span className="d-flex flex-row items-center">
          <h6>Gender</h6>{" "}
          <select onChange={filterSex}>
            <option>all</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </span>
      </div>
      <table>
        <tr style={{ cursor: "pointer" }} onClick={() => setAssend(!assend)}>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
        </tr>
        {assend
          ? staged?.map((item) => (
              <tr>
                <td>{item?.name}</td>
                <td>{item?.gender}</td>
                <td>{item?.height}</td>
              </tr>
            ))
          : [...staged].reverse().map((item) => (
              <tr>
                <td>{item?.name}</td>
                <td>{item?.gender}</td>
                <td>{item?.height}</td>
              </tr>
            ))}
        <tfoot>
          <tr className="tb-footer">
            <td colspan="0">No.Character</td>
            <td style={{ textAlign: "center" }} colspan="2">
              Height Sum
            </td>
          </tr>
          <tr className="tb-footer">
            <td colSpan="0">{staged?.length}</td>
            <td style={{ textAlign: "center" }} colSpan="2">
              {sumHeight()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
