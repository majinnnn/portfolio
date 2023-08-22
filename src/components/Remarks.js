import { Fragment, useContext, useState, useEffect } from "react";
import NavContext from "../context/navContext";

const Remarks = (props) => {
  const { nav, changeNav } = useContext(NavContext);
  const [ data, setData ] = useState([]);
  console.log("data", data);

  useEffect(() => {
    async function fetchData() {
      const resData = await fetch("http://localhost:3000/api/get-data");
      const parseResData = await resData.json();

      if (Array.isArray(parseResData)) {
        setData(parseResData);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="Remarks" className={`${nav === "remarks" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          Client <span>Remarks</span>
        </h2>
        <span className="title-head-subtitle">
          Some of the remarks from the people who have worked with me.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container">
        <div className="row">
          {data.map((remark, i) => (
            <div className="col-12 col-sm-10" key={i}>
              <article>
                <p>
                  <span
                    className="font-weight-600 uppercase"
                    style={{ marginBottom: "10px" }}
                  >
                    {remark.name}
                  </span>
                  {" said:"}
                </p>

                <div className="blog-excerpt" style={{ marginBottom: "50px" }}>
                  <em>
                    <span>
                      {"“"} {remark.message} {"”"}
                    </span>
                  </em>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Remarks;
