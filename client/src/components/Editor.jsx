import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/javascript';
import AceEditor from 'react-ace';
import React, { Fragment } from 'react';

const Editor = () => (
  <Fragment>
    <h3>Editor</h3>
    <AceEditor theme="monokai" mode="javascript" name="UNIQUE_ID_OF_DIV" />
  </Fragment>
);

export default Editor;
