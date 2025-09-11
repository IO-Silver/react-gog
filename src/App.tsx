import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [hideAlert, setHideAlert] = useState(true);

  return (
    <div>
      <Alert
        hidden={hideAlert}
        onClose={() => {
          setHideAlert(true);
        }}
      >
        <span>Hello from Alert component with children prop!</span>
      </Alert>
      <Button
        onClick={() => {
          setHideAlert(!hideAlert);
        }}
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
