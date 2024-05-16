import CustomButton from "../button-custom";
import CardBackground from "../card-background";
import Input from "../input";

function CardLoginTemporario() {
    return (
        <CardBackground>
            <Input type="text" label="Código do processo" />
            <CustomButton color="green">CRIAR</CustomButton>
        </CardBackground>
    );
}

export default CardLoginTemporario;
