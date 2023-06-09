import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
import Menu from "../source/components/Menu";
import { StyledTimeline } from "../source/components/TimeLine";

function PaginaPrincipal() {

    const estilosDaHomePage = {
        // backgroundColor: "red"
    };


    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>

                <Menu />
                <main style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Header />
                    <TimeLine playlists={config.playlists} />
                </main>
            </div>

        </>
    );
}

export default PaginaPrincipal;



const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" alt="teste" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="teste" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>

            </section>
        </StyledHeader>

    )
}


function TimeLine(props) {
    console.log("Dentro do components", props);
    const playlistNames = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log("Videos", videos);
                return (
                    <section>
                        <h2>
                            {playlistName}
                        </h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}

        </StyledTimeline>

    )
}
