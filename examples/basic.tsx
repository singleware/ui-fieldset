/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the basic fieldset component.
 */
import * as Fieldset from '../source';
import * as JSX from '@singleware/jsx';

const fieldset = (
  <Fieldset.Component>
    <input type="text" name="input" />
    <select name="select">
      <option value="0">Option 1</option>
      <option value="1">Option 2</option>
    </select>
    <button type="submit">Button</button>
  </Fieldset.Component>
) as Fieldset.Element;

// Change the read-only property of all fiends.
fieldset.readOnly = true;

// Change the required property of all fiends.
fieldset.required = true;

// Change the disabled property of all fiends.
fieldset.disabled = true;

// Change the fieldset name.
fieldset.name = 'new-name';

// Change the value of all fields.
fieldset.value = {
  input: 'New value',
  select: '0'
};
