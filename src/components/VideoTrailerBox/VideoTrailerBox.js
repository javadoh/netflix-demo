import React, { Component } from 'react';
import YouTube from 'react-youtube';

  class VideoTrailerBox extends Component{

//############################################ LIFECYCLE METHODS #######################################//

    constructor(props){
        //INITIALIZATION - PRE MOUNTING
        super(props);
        this.state = {
            backgroundColor: '#FFFFFFF',
            videoId: 0, 
            videoUrl: props.selectedVideoId != null ? props.movies[props.selectedVideoId - 1].videoUrl : props.movies[0].videoUrl,
            videoDescription: props.selectedVideoId != null ? props.movies[props.selectedVideoId -1].descripcion : props.movies[0].descripcion,
            player: null
        }
    }

    /*static getDerivedStateFromProps(nextProps, prevState) {
        // do things with nextProps.someProp and prevState.cachedSomeProp
        console.log("GetDerived selected video:"+nextProps.selectedVideoId)
        return {
          videoId: nextProps.selectedVideoId,
          // ... other derived state properties
        };
      }*/

      componentDidMount() {

        console.log("videoURl: "+this.state.videoUrl);
      console.log("videoDescripcion: "+this.state.videoDescripcion);
          //MOUNTING
          //AL MONTARSE EL COMPONENTE ESPERAMOS 1 SEGUNDO Y MODIFICAMOS EL COLOR DE FONDO CON LA PROPIEDAD RECIBIDA
        setTimeout(() => {
          this.setState({backgroundColor: this.props.bckColor})
        }, 1000)
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        //PRE UPDATE
        //VERIFICAMOS ANTES DE CAMBIAR EL VIDEO
            document.getElementById("snapshot").innerHTML =
            "getSnapshotBeforeUpdate - Id movie antes del cambio: " + prevState.videoId;
            return null;
      }

      componentDidUpdate() {
          //UPDATE
        document.getElementById("postsnapshot").innerHTML =
        "componentDidUpdate - Id movie actualizado: " + this.state.videoId;
      }

      componentWillUnmount(){
          //UNMOUNTING
          //AL SALIR ELIMINAMOS 
          console.log("SALIENDO DEL COMPONENTE")

      }
//#########################################################################################//  
    

    setVideoId(id){
        this.setState({videoId: id});
    }

    setPlayer(url){
        this.setState({player: url});
    }

  render(){

    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
          autoplay: 1
        },
      };

  const onReady = (event) => {
    // eslint-disable-next-line
    console.log(`YouTube Player object for videoId: "${this.state.videoUrl}" has been saved to state.`);
    this.setPlayer(event.target);
  };

  const onPlayVideo = () => {
      console.log("videoURl: "+this.state.videoUrl);
      console.log("videoDescripcion: "+this.state.videoDescripcion);
   this.state.player.playVideo();
  };

  const onPauseVideo = () => {
    this.state.player.pauseVideo();
  };

  const onChangeVideo = () => {
      console.log("CHANGE VIDEO STATE: "+ this.state.videoId)
      if(this.state.videoId >= 4){
        this.setState({
            videoId: 0, 
            videoUrl: this.props.movies[0].videoUrl,
            videoDescription: this.props.movies[0].descripcion
        })
      }else{
      this.setState({
          videoId: this.state.videoId +1, 
          videoUrl: this.props.movies[this.state.videoId +1].videoUrl,
          videoDescription: this.props.movies[this.state.videoId +1].descripcion
      })
        }
  };

  return (
      <div>
      <div>
          <p style={{color: '#FFFFFF'}} id="snapshot"></p>
          <p style={{color: '#FFFFFF'}} id="postsnapshot"></p>
      </div>
    <div>
      <YouTube videoId={this.state.videoUrl} opts={opts} onReady={onReady} />
      <button type="button" onClick={onPlayVideo} disabled={!this.state.player}>
        Play
      </button>
      <button type="button" onClick={onPauseVideo} disabled={!this.state.player}>
        Pause
      </button>
      <button type="button" onClick={onChangeVideo} disabled={!this.state.player}>
        Siguiente Pelicula
      </button>
    </div>
        <div>
            <p style={{color: '#FFFFFF'}}>{this.state.videoDescription}</p>
        </div>
    </div>
  );
  }
}

export default VideoTrailerBox;