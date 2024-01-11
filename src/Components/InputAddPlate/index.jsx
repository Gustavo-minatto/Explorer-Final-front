import { Container } from './styles'

export function InputAddPlate({icon: Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </Container>
    )
}