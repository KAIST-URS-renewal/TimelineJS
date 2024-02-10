import 'react';
import {Title} from 'src/components';
import {timelineProps} from "./interface";

const App = (props: timelineProps)=> {
    console.log(props.data);
    console.log(props.options);

return (
    <div>
        <Title title={"this is a title"} />
    </div>
)
}

export default App
