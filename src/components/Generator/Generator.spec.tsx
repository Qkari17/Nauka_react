import { render, screen, fireEvent } from "@testing-library/react";


import { Generator } from "./Generator";

describe('Generator component', () => [
it('should generate different values',  () => {
        const {} = render (<Generator/>);
const id  = screen.getByText(/[a-z0-9-]{36}/i).textContent;

fireEvent.click(screen.getByRole('button', {name:"Refresh"}));
const newId =screen.getByText(/[a-z0-9-]{36}/i).textContent;

expect(newId).not.toBe(id)
    })
])