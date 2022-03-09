import TestCard from "../components/labTestComponents/TestCard";

function SelectedLabTests() {
    const testList = [
        {_id:1, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
        {_id:2, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
        {_id:3, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
        {_id:4, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
        {_id:5, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
        {_id:6, name: "Diabetes Profile Package (1469)", category: "Lab Test", labName: "Chughtai Labs", afterPrice: "550", actualPrice: "499"},
      ];
  return (
    <section className="selectedLab">
      <div className="container">
        <div className="caption row align-items-center">
          <div className="col-lg-7">
            <h4 className="primary-heading">Chughtai Lab </h4>
          </div>
          <div className="col-lg-5">
            <div className="searchProduct">
              <div className="col">
                <input type="text" className="form-control" />
                <i>
                  <span className="iconify" data-icon="akar-icons:search" />
                </i>
              </div>
              <div className="checkField">
                <input
                  type="checkbox"
                  id="check1"
                  name="check"
                  className="checkbox-style"
                />
                <label htmlFor="check1">
                  <span> Available Tests Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="listLabs">
          <div className="row">
              { testList.map(test => <TestCard key={test._id} value={test}/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedLabTests;
