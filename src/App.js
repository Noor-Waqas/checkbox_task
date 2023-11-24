import React, { useState } from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";

const App = () => {
  const [check, setCheck] = useState(Array(10).fill(false));

  const handleChange = (item) => {
    const updateArry = [...check];
    updateArry[item] = !updateArry[item];
    setCheck(updateArry);
  };

  const handleSubmit = () => {
    console.log("Results : ",check);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>List All Checkbox </h1>
          {check.map((isChecked, item) => (
            <Form key={item}>
              <FormGroup check inline>
                <Input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleChange(item)}
                />
                <Label check>Programming</Label>
              </FormGroup>
            </Form>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
