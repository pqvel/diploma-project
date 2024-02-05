import { FC, useState } from "react"
import { Button, Form, Typography } from "antd"

const { Title, Paragraph } = Typography

const enum TestInputType {
    radio = "radio",
    checkbox = "checkbox"
}

type Variant = {
    id: string
    title: string
    isSelect: boolean
}

type Props = {
    title: string
    descr: string
    variants: Variant[]
    rightAnswers: string[]
}

const Test:FC<Props> = ({ title, descr, variants, rightAnswers }) => {
    const inputType: TestInputType = rightAnswers.length === 1 ? TestInputType.radio : TestInputType.checkbox
    const [selectedVariants, selectedVariants]
    
    // return <div>
    //     <h3>{title}</h3>
    //     <p>{descr}</p>
    //     <div>
    //         {variants.map(variant => <TestInput title={variant.title} type={inputType} key={variant.title}/>)}
    //     </div>
    //     <Button type="primary">Проверить</Button>
    // </div>
    return (

        <Form>
            <Typography>
                <Title level={3}>{title}</Title>
                <Paragraph>{descr}</Paragraph>
            </Typography>
            
        </Form>
    )
}

type TestInputProps = {
    title: string
    type: TestInputType
}

const TestInput: FC<TestInputProps> = ({type, title, isSelect}) => (
    <>
        <label className={isSelect ? "" : ""}>
            <input type={type}/>
            {title}
        </label>
    </>
)