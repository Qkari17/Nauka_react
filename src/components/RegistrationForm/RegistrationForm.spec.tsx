import { fireEvent, render, screen } from "@testing-library/react";
import { RegistrationFormRefsHookForm } from "./RegistrationFormRefsHookForm";

describe("RegistrationFormRefsHookForm component", () => {
  it("should validate form using fireEvent", async () => {
    render(<RegistrationFormRefsHookForm />);

    const emailField = screen.getByLabelText(/e-mail/i);
    fireEvent.change(emailField, { target: { value: "aaa" } });

    const passwordField = screen.getByLabelText(/password/i);
    fireEvent.change(passwordField, { target: { value: "bbb" } });

    const languageField = screen.getByLabelText(/language/i);
    fireEvent.change(languageField, { target: { value: "ccc" } });

    fireEvent.click(screen.getByRole("button"));

    expect(await screen.findByText(/Invalid e-mail/i)).toBeInTheDocument();
  });
});
