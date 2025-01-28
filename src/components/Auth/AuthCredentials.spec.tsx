import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContextProvider } from "./AuthContext";
import { AuthCredentials } from "./AuthCredentials";


describe('AuthCredentials component', () => [
it('should toggle values',  () => {
     render (<AuthContextProvider><AuthCredentials></AuthCredentials></AuthContextProvider>);

expect(screen.getByText('Is user logged? NO')).toBeInTheDocument();
fireEvent.click(screen.getByRole("button", {name: "Toggle"}));
expect(screen.getByText(/Is user logged\? YES/)).toBeInTheDocument();
    })
])