import { getImages } from "../../utils/getImages"
import { Container } from "./style"


function Card({item}) {
    return (
        <Container>
            <img src={getImages(item.poster_path)} />
            <p>{item.title || item.name || ''}</p>
        </Container>
    )
}

export default Card