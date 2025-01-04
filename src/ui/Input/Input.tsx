import { ComponentPropsWithRef, useId, forwardRef, type Ref} from "react";

type Props = {
    label: string;
}& ComponentPropsWithRef <'input'>;

export const Input =forwardRef( 
    ({label, ...rest}: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
 return (
    <div>
                <label className="mr-2" htmlFor={id}>{label}</label>
                <input id={id} ref={ref}{...rest}></input>
            </div>
 );
})