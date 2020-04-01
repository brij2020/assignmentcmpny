import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  /***
   * Method for handle select/uncheked event
   * @param{e}
   * @return {undefined}
   */
  changeCheckBox = e => {
    try {
      const head = e.target.parentNode.parentNode.firstChild.innerHTML;
      const isChecked = e.target.checked;
      const value = e.target.value;
      const jsonObj = {
        value: value,
        type: head
      };
      if (isChecked) {
        let newA = [...this.state.tasks, jsonObj];
        this.setState(() => ({ tasks: newA }));
      } else {
        const taskList = [...this.state.tasks];
        let arrayI = this.state.tasks.findIndex(t => t.value === value);
        taskList.splice(arrayI, 1);
        this.setState(() => ({ tasks: taskList }));
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  /***
   * Mrhod fot Custom UI
   * @param{list} type Array
   * @return {UI}
   */
  ListUI = list =>
    list.map(el => (
      <>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {el.value}
          <span
            class="badge badge-primary badge-pill"
            onClick={e => {
              this.removeSelection(e, el.value);
            }}
          >
            X
          </span>
        </li>
      </>
    ));

  /**
   * Method for remove icon on list
   * @param{e,id}
   * @return{undefined}
   *
   */
  removeSelection = (e, id) => {
    try {
      let collections = document.getElementsByClassName("form-check-input");
      let arrayType = Array.from(collections);
      const taskList = [...this.state.tasks];
      const filteredArray = arrayType.filter(element => element.id === id);

      filteredArray[0].checked = false;

      let arrayI = this.state.tasks.findIndex(t => t.value === id);
      taskList.splice(arrayI, 1);
      this.setState(() => ({ tasks: taskList }));
    } catch (e) {
      console.log("e", e);
    }
  };

  render() {
    const { tasks } = this.state;
    const portugalList = tasks.filter(el => el.type === "Portugal");
    const nicaraguaList = tasks.filter(el => el.type === "Nicaragua");
    const islandsList = tasks.filter(el => el.type === "Marshall Islands");

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="con">
                    <h5 className="card-title">Portugal</h5>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="a"
                        value="a"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="a">
                        A
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="b"
                        value="b"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="b">
                        B
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="c"
                        value="c"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="c">
                        C
                      </label>
                    </div>
                  </div>
                  <div className="con">
                    <h5 className="card-title">Nicaragua</h5>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="d"
                        value="d"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="d">
                        D
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="e"
                        value="e"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="b">
                        E
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="f"
                        value="f"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="b">
                        F
                      </label>
                    </div>
                  </div>
                  <div className="con">
                    <h5 className="card-title">Marshall Islands</h5>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="x"
                        value="x"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="x">
                        X
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="y"
                        value="y"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="y">
                        Y
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value="z"
                        onChange={e => this.changeCheckBox(e)}
                        id="z"
                      />
                      <label className="form-check-label" htmlFor="z">
                        Z
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={{ height: "364" }}>
                <div className="card-body">
                  <div>
                    {portugalList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{portugalList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(portugalList)}</ul>
                      </>
                    )}
                  </div>
                  <div>
                    {nicaraguaList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{nicaraguaList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(nicaraguaList)}</ul>
                      </>
                    )}
                  </div>
                  <div>
                    {islandsList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{islandsList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(islandsList)}</ul>
                      </>
                    )}
                  </div>

                  {tasks.length === 0 ? <p>No Task Selected ! </p> : void 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
