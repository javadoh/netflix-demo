import React from 'react';
import FeaturedButton from '../../components/FeaturedButton/FeaturedButton';
import FeaturedMovieImage from '../../components/FeaturedMovieImage/FeaturedMovieImage';
import MoviesList from '../../components/MoviesList/MoviesList';
import VideoTrailerBox from '../../components/VideoTrailerBox/VideoTrailerBox';
import { getInnerWidth } from '../../utils/Utils';
import { Img } from '../../components/FeaturedMovieImage/FeaturedMovieImageStyles';

const moviesList = [
    { id:1, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Angry_Birds_Movie_poster.png/220px-The_Angry_Birds_Movie_poster.png", title: "Angry Birds", author: "Tarantino", 
        cols: 1,
        videoUrl: "VY4qCkoadpI",
        descripcion: "Angry Birds: es una película finlandés-estadounidense en 3D de animación por computadora. Es la primera entrega y comedia de acción dirigida por Clay Kaytis y Fergal Reilly,2​ producida por John Cohen y Catherine Winder3​ y escrita por Jon Vitti.4​ La película está basada en la famosa serie de videojuegos Angry Birds. El elenco principal incluye a Jason Sudeikis, Josh Gad, Danny McBride, Bill Hader, Maya Rudolph, y Peter Dinklage." },
    { id:2, 
        img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg", title: "Joker", author: "Tarantino", 
        cols: 1,
        videoUrl: "zAGVQLHvwOY",
        descripcion: "Joker: es una película de suspenso y drama psicológico estadounidense de 2019 distribuida por Warner Bros. y basada en el Joker, personaje de DC Comics. Es la primera de una serie de películas basadas en DC separadas del universo extendido de DC (DCEU) compartido. La película fue dirigida por Todd Phillips a partir de un guion escrito junto con Scott Silver. Está protagonizada por Joaquin Phoenix como el personaje principal, acompañado por Robert De Niro, Zazie Beetz y Frances Conroy, entre otros. En 27 de octubre se convirtió en la película clasificación R, más taquillera superando a Deadpool.3​ Mientras que para el 15 de noviembre, se convirtió en la primera película de clasificación R en superar los 1000 millones en taquilla." },
    { id:3, 
        img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png", title: "Dolittle", author: "Tarantino", 
        cols: 1,
        videoUrl: "LWbtxG-jXMY",
        descripcion: "DoLittle: es una película estadounidense de aventuras, comedia y fantasía dirigida por Stephen Gaghan y escrita por Gaghan y Thomas Shepherd. Se basa en el personaje Doctor Dolittle creado por Hugh Lofting, y se basa principalmente en Los viajes del doctor Dolittle, segundo libro con historias del personaje. Robert Downey Jr. interpreta al personaje protagonista. El reparto de la película incluye a Antonio Banderas, Michael Sheen y Jim Broadbent en papeles de acción en vivo; junto con un elenco de voces que incluye a John Cena, Marion Cotillard, Carmen Ejogo, Ralph Fiennes, Selena Gomez, Tom Holland, Rami Malek, Kumail Nanjiani, Craig Robinson, Octavia Spencer, Emma Thompson y Frances de la Tour. La película se estrenó el 17 de enero de 2020 y es distribuida por Universal Pictures, lo que la convierte en la primera película basada en Doctor Dolittle que no es distribuida por 20th Century Studios." }, 
    { id:4, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg", title: "Scary Movie", author: "Tarantino", 
        cols: 1,
        videoUrl: "3iy0pE1FBkc",
        descripcion: "Scary Movie: es una película estadounidense dirigida por David Zucker. Es la tercera parte de la saga cómica de Scary Movie (Una película de miedo). Esta entrega tiene como protagonistas principales a los actores Anna Faris y Simon Rex. Parodia películas como The Ring, Señales, The Matrix Reloaded, 8 Millas, Los otros, El escondite, etcétera. En español se presentó con el subtítulo No hay 2 sin 3" },
    { id:5, 
        img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Hustlers_%28Official_Film_Poster%29.png", title: "Hustlers", author: "Tarantino", 
        cols: 1,
        videoUrl: "wpee9C3QnkE",
        descripcion: "Hustlers: es una película de drama de crimen de comedia negra estadounidense de 2019 escrita y dirigida por Lorene Scafaria, basada en el artículo de 2015 de New York Magazine The Hustlers at Scores: The Ex-Strippers Who Stole From (Mostly) Rich Men and Gave to, Well, Themselves por Jessica Pressler.2​ La película está protagonizada por Constance Wu, Jennifer Lopez, Julia Stiles, Keke Palmer, Lili Reinhart, Lizzo y Cardi B. La trama sigue a un grupo de estríperes en la ciudad de Nueva York que comienzan a robar dinero drogando a los comerciantes y CEOs que visitan su club, luego corriendo sus tarjetas de crédito. López también es productora de la película a través de Nuyorican Productions, junto a Jessica Elbaum, Will Ferrell y Adam McKay a través de su pancarta Gloria Sanchez. Por su actuación en la película, López recibió el Premio de la Asociación de Críticos de Cine de Los Ángeles a la Mejor Actriz de Reparto." }
  ];

  const moviesMoreList = [
    { id:1, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Giver_poster.jpg/220px-The_Giver_poster.jpg", title: "Giver", author: "Tarantino", 
        cols: 1,
        videoUrl: "fH6B4S9ENY4",
        descripcion: "La descripción de The Giver kasdfjskdfhsdkghsdkghsdkghsdkghsdkghdskghsdkgh" },
    { id:2, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/A_Beautiful_Mind_Poster.jpg/220px-A_Beautiful_Mind_Poster.jpg", title: "BeautifulMind", author: "Tarantino", 
        cols: 1,
        videoUrl: "9wZM7CQY130",
        descripcion: "La descripción de A Beatiful mind kasdfjskdfhsdkghsdkghsdkghsdkghsdkghdskghsdkgh" },
    { id:3, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Collateral_%28Movie%29.jpg/220px-Collateral_%28Movie%29.jpg", title: "Colateral dmg", author: "Tarantino", 
        cols: 1,
        videoUrl: "Pwrq3O6XDPs",
        descripcion: "La descripción de Collateral kasdfjskdfhsdkghsdkghsdkghsdkghsdkghdskghsdkgh" },
    { id:4, 
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Dark_Phoenix_%28film%29.png/220px-Dark_Phoenix_%28film%29.png", title: "Dark Phoenix", author: "Tarantino", 
        cols: 1,
        videoUrl: "Nly3-14vLh0",
        descripcion: "La descripción de Dark Phoenix kasdfjskdfhsdkghsdkghsdkghsdkghsdkghdskghsdkgh" },
    { id:5,
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Lara_Croft_film.jpg/220px-Lara_Croft_film.jpg", title: "Tomb Raider", author: "Tarantino", 
        cols: 1,
        videoUrl: "8ndhidEmUbI",
        descripcion: "La descripción de Lara Croft kasdfjskdfhsdkghsdkghsdkghsdkghsdkghdskghsdkgh" }
  ];

class Home extends React.Component {

    state= {
        opacity: 1,
        isReproducing: false,
        isShowMiLista: false, 
        windowWidth: getInnerWidth(),
        selectedMovieImage: null,
        selectedVideoId: null
    }

    handleResize = () => {
        this.setState({windowWidth: window.innerWidth});
      };

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
    }

    handleReproducir = () => {
        this.setState({
            opacity: !this.state.isReproducing ? 0.2 : 1,
            isReproducing: !this.state.isReproducing
        });
    };

    handleMasMiLista = () => {
        this.setState({
            isShowMiLista: !this.state.isShowMiLista
        })
    }

    selectedMovie = (movie) => {
        console.log("MOVIE: "+movie.id);

        this.setState({
            selectedMovieImage: movie.img, 
            selectedVideoId: movie.id
            })
    }

    render(){
        return(
        <div>
        <header>

            {this.state.isReproducing ? (
                <VideoTrailerBox bckColor="#000000" 
                selectedVideoId={this.state.selectedVideoId}
                movies={!this.state.isShowMiLista ? moviesList : moviesMoreList} />
            ):(
            <Img 
                    height="600"  
                opacity={this.state.opacity}
                src={this.state.selectedMovieImage != null ? this.state.selectedMovieImage : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/The_Angry_Birds_Movie_poster.png/220px-The_Angry_Birds_Movie_poster.png"} 
                alt="featured movie" 
                innerWidth={this.state.innerWidth}
                /> 
            )
            }
            
            <FeaturedButton 
            action={this.handleReproducir} 
            title={!this.state.isReproducing ? "Reproducir" : "Cancelar"} 
            txtColor="white" 
            bckColor="red" 
            left={this.state.windowWidth < 768 ? "5%" : "10%"}
            bottom={this.state.windowWidth < 768 ? "70%" : "20%"}
            />
            <FeaturedButton 
            action={this.handleMasMiLista} 
            title={!this.state.isShowMiLista ? "+ Mi Lista" : "Cancelar"}
            txtColor="black" 
            bckColor="grey" 
            left={this.state.windowWidth < 768 ? "40%" : "25%"}
            bottom={this.state.windowWidth < 768 ? "70%" : "20%"}
            />
        </header>
        
            <MoviesList 
            action={this.selectedMovie} 
            movies={!this.state.isShowMiLista ? moviesList : moviesMoreList} 
            >
            {this.state.isShowMiLista ? "Mi Lista": "Nuevos Estrenos"}
            </MoviesList>
        </div>
        );
    }
}

export default Home;