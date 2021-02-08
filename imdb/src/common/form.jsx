import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formGroups: [
        { title: "hello", type: "text" },
        { title: "hi" },
        { title: "password", type: "password" },
        { title: "email", type: "email" },
      ],
    };
  }

  addFormGroup = (title, type = "text") => {
    let formGroup = {
      title,
      type,
    };
    this.setState({
      formGroups: this.state.formGroups.push(formGroup),
    });
  };

  handleSubmit = (e) => {};

  render() {
    const { formGroups } = this.state;

    return (
      <div className="col-sm-6">
        <form action="" className="form-group">
          {formGroups.map(({ title, type }, index) => (
            <div className="form-group row">
              <label htmlFor={index} className="col-sm-2 col-form-label">
                {title}
              </label>
              <div className="col">
                <input type={type} className="form-control" id={index} />
              </div>
            </div>
          ))}
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => this.handleSubmit()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
