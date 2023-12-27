import { HTMLProps } from "react"

type Props = HTMLProps<HTMLFormElement>

const Form = (props: Props) => <form noValidate {...props} />

export { Form }
