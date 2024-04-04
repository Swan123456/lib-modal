
# HRnet Modal

## How to Install

To install the package, you can use the following command : 

`npm install -modal`

## Package Contents

This package contains the following components :

```
<Modal /> // React component that displays a modal dialog box.
```

## How to Import

To import the component into your code, 
use the following syntax:

```
import Modal from 'hrnet-modal';
```

## Example

```
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'hrnet-modal';

const App = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleCloseModal = () => {
    setModalOpened(false);
  };

  return (
    <div>
      <button onClick={() => setModalOpened(true)}>Open Modal</button>
      <Modal
        title="Success!"
        opened={modalOpened}
        onClose={handleCloseModal}
        content="Yo!"
        btnText="Close"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

## Component Parameters

### DataInput

/**
 * Modal component
 * @param {string} title - Title of the modal.
 * @param {boolean} opened - Indicates whether the modal is open or closed.
 * @param {() => void} onClose - Function to call when the modal is closed.
 * @param {string} content - Content to display in the modal.
 * @param {string} btnText - Text to display on the close button.
 * @returns {JSX.Element} - React component.
 * @summary React component that displays a modal dialog box.
 */



## Summary
The Modal component is a React component that displays a modal dialog box with customizable title, content, and close button. It provides a simple and convenient way to implement modal functionality in your React applications.






