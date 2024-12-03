import ClickEvent from "./ClickEvent.tsx"
import PassingFunctions from "./PassingFunctions.tsx";
import EventObject from "./EventObject.tsx";
import Counter from "./Counter.tsx";
import BooleanStateVariables from "./BooleanStateVariables.tsx";
import DateStateVariable from "./DateStateVariable.tsx";
import ObjectStateVariable from "./ObjectStateVariable.tsx";
import ArrayStateVariable from "./ArrayStateVariable.tsx";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div id="wd-passing-functions">
            <h4> Lab 4 </h4>
            <ClickEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />

        </div>)
}