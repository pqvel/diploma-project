import { FC } from "react"

const enum TestInputType {
    radio = "radio",
    checkbox = "checkbox"
}

type Variant = {
    id: string
    title: string
}

type Props = {
    title: string
    descr: string
}

const Test:FC<Props> = ({ title, descr }) => {
    const rightAnswers = []
    const variants: Variant[] = []
    const inputType: TestInputType = rightAnswers.length === 1 ? TestInputType.radio : TestInputType.checkbox

    return <div>
        <h3>{title}</h3>
        <p>{descr}</p>
        <div>
            {variants.map(variant => <TestInput title={variant.title} type={inputType} key={variant.title}/>)}
        </div>
    </div>
}

type TestInputProps = {
    title: string
    type: TestInputType
}

const TestInput: FC<TestInputProps> = ({type, title}) => (
    <label>
        <input type={type}/>
        {title}
    </label>
)