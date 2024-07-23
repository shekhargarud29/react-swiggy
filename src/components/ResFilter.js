// import { ResSortBy } from "./ResSortBy";

export const ResFilter = ({ sortBy }) => {
  //   const sortBy = ResSortBy();

  const filter = () => {
    // if (document.getElementById("Relevance(Default)1").checked === true) {
    //   console.log("relevence from filter");
    //   // console.log(document.getElementById("Relevance(Default)").id);
    //   sortBy(document.getElementById("Relevance(Default)1").value);
    // } else if (document.getElementById("DeliveryTime1").checked === true) {
    //   console.log("deliveryTime from filter");
    //   sortBy(document.getElementById("DeliveryTime1").value);
    // } else if (document.getElementById("Rating1").checked === true) {
    //   console.log("rating from filter");
    //   sortBy(document.getElementById("Rating1").value);
    // } else if (document.getElementById("Cost:LowtoHigh1").checked === true) {
    //   console.log("costLowToHigh from filter");
    //   sortBy(document.getElementById("Cost:LowtoHigh1").value);
    // } else if (document.getElementById("Cost:HightoLow1").checked === true) {
    //   console.log("costHightoLow from filter");

    //   sortBy(document.getElementById("Cost:HightoLow1").value);
    // } else {
    //   console.log("no checked from filter");
    // }

    // const radios = document.getElementsByName("flexRadioDefault1");

    // radios.forEach((radio) => {
    //   if (radio.checked === true) {
    //     console.log(radio.value + " from filter");
    //     sortBy(radio.value);
    //   }
    // });

    const checkedRadio = document.querySelector(
      "input[name='flexRadioDefault1']:checked"
    );
    if (checkedRadio) {
      console.log(checkedRadio.value + " from filter (radio button)");
      sortBy(checkedRadio.value);
    }
    const checkedCheckboxes = Array.from(
      document.querySelectorAll("input[name='flexcheckDefault1']:checked")
    );

    console.log(checkedCheckboxes);
    if (checkedCheckboxes.length > 0) {
      const lastCheckedCheckbox =
        checkedCheckboxes[checkedCheckboxes.length - 1];
      console.log(lastCheckedCheckbox.value + " from filter (checkbox)");
      sortBy(lastCheckedCheckbox.value, lastCheckedCheckbox.id);
    } else {
      // If no checkboxes are checked, handle this case if needed
      console.log("No checkboxes checked");
    }

    // let lastCheckCheckBox = null;
    // const checkboxes = document.getElementsByName("flexcheckDefault1");
    // checkboxes.forEach((checkbox) => {
    //   if (checkbox.checked === true) {
    //     lastCheckCheckBox = checkbox;
    //     console.log(lastCheckCheckBox);
    //   }
    // });
    // if (lastCheckCheckBox) {
    //   console.log(lastCheckCheckBox.value + " from filter");
    //   // console.log(checkbox.value + " from filter");
    //   sortBy(lastCheckCheckBox.value, lastCheckCheckBox.id);
    // }
    // console.log(e.target.id);
  };

  return (
    <>
      <div className="mx-2 ">
        <button
          type="button"
          className="btn border rounded-pill  p-2 px-4"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          <strong>Filter</strong>
        </button>

        {/* <!-- The Modal --> */}
        <div className="modal " id="myModal">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">
                  <strong>Filter</strong>
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body border-1  d-flex justify-content-start">
                <div className="left  col-4 border-end">
                  <div className="list-group p-3">
                    <label className="list-group-item btn btn-warning  border-0 fw-bold h6">
                      <input
                        className="form-check-input me-1 filter-radio"
                        type="radio"
                        value=""
                        name="default"
                        id="first-check"
                        defaultChecked
                        onChange={(e) => {
                          // console.log(e.target.checked);
                          if (e.target.checked === true) {
                            document.getElementById("first").style.display =
                              "block";
                            document.getElementById("second").style.display =
                              "none";
                            document.getElementById("third").style.display =
                              "none";
                            document.getElementById("fourth").style.display =
                              "none";
                          }
                        }}
                      />
                      Sort
                    </label>
                    <label className="list-group-item btn btn-warning  border-0 fw-bold h6">
                      <input
                        className="form-check-input me-1 filter-radio"
                        type="radio"
                        value=""
                        name="default"
                        id="second-check"
                        onChange={(e) => {
                          console.log(e.target.checked);
                          if (e.target.checked === true) {
                            document.getElementById("second").style.display =
                              "block";
                            document.getElementById("first").style.display =
                              "none";
                            document.getElementById("third").style.display =
                              "none";
                            document.getElementById("fourth").style.display =
                              "none";
                          }
                        }}
                      />
                      Delivery Time
                    </label>
                    <label className="list-group-item  btn btn-warning border-0 fw-bold h6">
                      <input
                        className="form-check-input me-1 filter-radio"
                        type="radio"
                        value=""
                        name="default"
                        id="third-check"
                        onChange={(e) => {
                          console.log(e.target.checked);
                          if (e.target.checked === true) {
                            document.getElementById("third").style.display =
                              "block";
                            document.getElementById("first").style.display =
                              "none";
                            document.getElementById("second").style.display =
                              "none";
                            document.getElementById("fourth").style.display =
                              "none";
                          }
                        }}
                      />
                      Rating
                    </label>
                    <label className="list-group-item btn btn-warning border-0 fw-bold h6">
                      <input
                        className="form-check-input me-1 filter-radio"
                        type="radio"
                        value=""
                        name="default"
                        id="fourth-check"
                        onChange={(e) => {
                          console.log(e.target.checked);
                          if (e.target.checked === true) {
                            document.getElementById("fourth").style.display =
                              "block";
                            document.getElementById("first").style.display =
                              "none";
                            document.getElementById("second").style.display =
                              "none";
                            document.getElementById("third").style.display =
                              "none";
                          }
                        }}
                      />
                      Veg or Non-VEg
                    </label>
                  </div>
                </div>
                <div className="right  col-8 ">
                  <div className="px-5 py-2">
                    <div id="first" className="">
                      <div className="text-secondary">
                        <span>SORT BY</span>
                      </div>
                      <div>
                        <ul className="list-group overflow-hidden ">
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" input-button me-2"
                                type="radio"
                                name="flexRadioDefault1"
                                id="Relevance(Default)1"
                                value="Relevance(Default)"
                                // onClick={(e) => {
                                //   // console.log("yo");
                                //   setrestaurantList(restaurantCollection);
                                // }}
                                defaultChecked
                              />
                              <label
                                className="d-flex"
                                htmlFor="Relevance(Default)1"
                              >
                                Relevance(Default)
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2  border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" input-button me-2"
                                type="radio"
                                name="flexRadioDefault1"
                                id="DeliveryTime1"
                                value="DeliveryTime"
                                // onClick={filterTime}
                              />
                              <label className="d-flex" htmlFor="DeliveryTime1">
                                DeliveryTime
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2  border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" input-button me-2"
                                type="radio"
                                name="flexRadioDefault1"
                                id="Rating1"
                                value="Rating"

                                // onClick={filterRating}
                              />
                              <label className="d-flex" htmlFor="Rating1">
                                Rating
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" input-button me-2"
                                type="radio"
                                name="flexRadioDefault1"
                                id="Cost:LowtoHigh1"
                                value="Cost:LowtoHigh"

                                // onClick={(e) => {
                                //   filterCostLowToHigh(e);
                                // }}
                              />
                              <label
                                className="d-flex"
                                htmlFor="Cost:LowtoHigh1"
                              >
                                Cost:LowtoHigh
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" input-button me-2"
                                type="radio"
                                name="flexRadioDefault1"
                                id="Cost:HightoLow1"
                                value="Cost:HightoLow"

                                // onClick={(e) => {
                                //   filterCostLowToHigh(e);
                                // }}
                              />
                              <label
                                className="d-flex"
                                htmlFor="Cost:HightoLow1"
                              >
                                Cost:HightoLow
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="second">
                      <div className="text-secondary">
                        <span>FILTER BY</span>
                      </div>
                      <div>
                        <ul className="list-group">
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" form-check-input me-2"
                                type="checkbox"
                                name="flexcheckDefault1"
                                id="fastdelivery"
                                value="DeliveryTime"
                              />
                              <label
                                className="form-check-label d-flex"
                                htmlFor="fastdelivery"
                              >
                                Fast Delivery
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="third">
                      <div className="text-secondary">
                        <span>FILTER BY</span>
                      </div>
                      <div>
                        <ul className="list-group  ">
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" form-check-input me-2 "
                                type="checkbox"
                                name="flexcheckDefault1"
                                id="Ratings 3.5+"
                                value="Rating"
                              />
                              <label
                                className="form-check-label d-flex"
                                htmlFor="Ratings 3.5+"
                              >
                                Ratings 3.5+
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" form-check-input me-2"
                                type="checkbox"
                                name="flexcheckDefault1"
                                id="Ratings 4.5+"
                                value="Rating"
                              />
                              <label
                                className="form-check-label d-flex"
                                htmlFor="Ratings 4.5+"
                              >
                                Ratings 4.5+
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item p-0 py-2 border-0">
                            <div className="d-flex align-items-center  px-1 justify-content-start">
                              <input
                                className=" form-check-input me-2"
                                type="checkbox"
                                name="flexcheckDefault1"
                                id="Ratings 4.0+"
                                value="Rating"
                              />
                              <label
                                className="form-check-label d-flex"
                                htmlFor="Ratings 4.0+"
                              >
                                Ratings 4.0+
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="fourth">
                      <h1>fourth box</h1>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                  onClick={filter}
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <button
      type="button"
      className="btn border rounded-pill mx-3 p-2 px-4"
    >
      <strong>Filter</strong>
    </button> */}
      </div>
    </>
  );
};
