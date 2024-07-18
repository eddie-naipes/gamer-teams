import {Container} from "@screens/Groups/styles";
import {Header} from "@components/Header/Header";
import {HighLight} from "@components/Heghlight/HighLight";
import {GroupCard} from "@components/GroupCard/GroupCard";

export  function Groups() {
    return (
        <Container>
            <Header/>
            <HighLight title={"Turmas"} subtitle={"Jogue com a sua turma"} />
            <GroupCard title={"Galera Jr"} />
        </Container>
    );
}