import { useViewPort } from "../../hooks/useViewPort"
import { Text } from "../../ui";


export const ViewPort = () => {
    const size = useViewPort();
return(
    <div>
        <Text>X:{size.x} , Y:{size.y}</Text>
    </div>
)

}