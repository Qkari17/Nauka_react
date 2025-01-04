import { FormEventHandler, useRef,} from "react"
import { Button, Input } from "../../ui"

type RegistrationFormData={
    email:string;
    password: string;
    language: string;
};

export const RegistrationFormRefs = () =>{
    const emailFieldRef = useRef<HTMLInputElement>(null);
    const passwordFieldRef = useRef<HTMLInputElement>(null);
    const languageFieldRef = useRef<HTMLInputElement>(null);

    
    const handleSubmit: FormEventHandler= (event) => {
        event.preventDefault();
        const data: RegistrationFormData={
            email: emailFieldRef.current?.value || "",
            password: passwordFieldRef.current?.value|| "",
            language: languageFieldRef.current?.value || "",
        }
        console.log(data);
    };


    
    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input label='E-mail' ref={emailFieldRef} type='email' ></Input>
            <Input label='Password' ref={passwordFieldRef} type='password' ></Input>
            <Input label='Language' ref={languageFieldRef} ></Input>
            <Button label="Send" type="submit"/>
        </form>
    )
}