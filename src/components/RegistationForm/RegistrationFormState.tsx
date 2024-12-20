import { type ChangeEventHandler, useState } from "react"
import { Button } from "../../ui"

type RegistrationFormData={
    email:string;
    password: string;
    language: string;
}
export const RegistrationFormState = () =>{
    const [formData, setFormData] = useState<RegistrationFormData>({
        email:"",
        password:"",
        language:"",
    }
    )
    const {email,password, language} = formData;
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [language, setLanguage] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> =(event)=>{
        const id = event.target.id;
        const value = event.target.value;
      setFormData({
...formData,
[id]:value,
      })
    }
    return (
        <form className="flex flex-col gap-2">
            <p> Email:{email}, Password:{password}</p>
            <div>
                <label className="mr-2" htmlFor="email">E-mail</label>
                <input id="email" type="email" onChange={handleChange}></input>
            </div>
            <div>
                <label className="mr-2" htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handleChange}></input>
            </div>
            <div>
                <label className="mr-2" htmlFor="language">Language</label>
                <input id="language" type="text"  onChange={handleChange}></input>
            </div>
            <Button label="Send" type="submit"/>
        </form>
    )
}