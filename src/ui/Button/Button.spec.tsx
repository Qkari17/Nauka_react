import { render } from "@testing-library/react";
import { Button } from "./Button";
import '@testing-library/jest-dom';
import {axe} from "jest-axe";

describe('Button component', () => [
it('should not ha violations', async () => {
        const {container} = render (<Button label="Click me"/>);
const result =  await axe(container)
  expect(result).toHaveNoViolations()
    })
])