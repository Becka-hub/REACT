import React, { useState } from 'react';


const App = () => {
  // 1 const [value,setValue]=useState("Odin");
  const [value, setValue] = useState();
  // 1 const change=(e)=>{
  //    setValue(e.target.value);
  // }


  const change = (e) => {
    const a = e.target.value;
    setValue(a);
  }

  return (
    <div className="container">
      <form>
        <h1>Current value is: {value}</h1>
        {/* 1 <label>Odin  <input type="radio" checked={value==="odin"} className="me-2" value="odin" onChange={change} /></label>
       <label>Thor  <input type="radio" checked={value==="thor"}  value="thor" onChange={change} /></label> */}

        <div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" checked={value === "1"} value="1" onChange={change} id="inlineCheckbox1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" checked={value === "2"} value="2" onChange={change} id="inlineCheckbox2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
          </div>
        </div>



        <div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" onChange={change} id="exampleRadios1" defaultValue="option1" defaultChecked />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" onChange={change} id="exampleRadios2" defaultValue="option2" />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Second default radio
            </label>
          </div>
        </div>
        <select className="form-control custom-select mr-sm-2" onChange={change} id="inlineFormCustomSelect">
          <option selected>Choose...</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>

      </form>


      <form className="was-validated">
        <div className="mb-3">
          <label htmlFor="validationTextarea">Textarea</label>
          <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required defaultValue={""} />
          <div className="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
          <label className="custom-control-label" htmlFor="customControlValidation1">Check this custom checkbox</label>
          <div className="invalid-feedback">Example invalid feedback text</div>
        </div>
        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
          <label className="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
          <label className="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</label>
          <div className="invalid-feedback">More example invalid feedback text</div>
        </div>
        <div className="form-group">
          <select className="custom-select" required>
            <option value>Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <div className="invalid-feedback">Example invalid custom select feedback</div>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="validatedCustomFile" required />
          <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
          <div className="invalid-feedback">Example invalid custom file feedback</div>
        </div>
      </form>



    </div>
  );
}

export default App;
