import { render } from "@testing-library/react";

import '@testing-library/jest-dom';
import {axe} from "jest-axe";
import { Input } from "./Input";

describe('Input component', () => [
it('should not ha violations', async () => {
        const {container} = render (<Input label="E-mail"/>);
const result =  await axe(container)
  expect(result).toHaveNoViolations()
    })
])