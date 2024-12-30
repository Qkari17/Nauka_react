import { FormEventHandler, useRef,} from "react"
import { Button } from "../../ui"

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
                     <div>
                <label className="mr-2" htmlFor="email">E-mail</label>
                <input id="email" ref={emailFieldRef} type="email"></input>
            </div>
            <div>
                <label className="mr-2" htmlFor="password">Password</label>
                <input id="password" ref={passwordFieldRef} type="password"></input>
            </div>
            <div>
                <label className="mr-2" htmlFor="language">Language</label>
                <input id="language" ref={languageFieldRef} type="text" ></input>
            </div>
            <Button label="Send" type="submit"/>
        </form>
    )
}