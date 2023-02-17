import { Header } from "../blocks/header/header"
import { Window, TextBar, Button, HSpan, InputFile } from "../FormComponents/FormComponents.js"
import { useState } from "react"

export function WindowPage() {
    const [Input1, setInput1] = useState("")
    return (
        <>
            <Header />
            <Window>
                <HSpan name="Ввод данных" />
                <TextBar name="Поле 1" state={Input1} setState={setInput1} />
                <Button name={"ввод"} type="submite" callBack={() => alert("хуй")} />
                <InputFile />
            </Window>
        </>
    )
}