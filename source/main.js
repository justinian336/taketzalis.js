var React = require('react'),
    ReactDOM = require('react-dom'),
    Theme = require('material-ui/styles/MuiThemeProvider').default,
    getMuiTheme = require('material-ui/styles/getMuiTheme').default,
    baseTheme = require('./styles/customStyle.js'),
    injectTapEventPlugin = require('react-tap-event-plugin');
    
injectTapEventPlugin();

var Card = require('material-ui/Card/Card').default,
    AppBar = require('material-ui/AppBar').default,
    CardText = require('material-ui/Card/CardText').default,
    CardActions = require('material-ui/Card/CardActions').default,
    IconButton = require('material-ui/IconButton').default,
    Badge = require('material-ui/Badge').default,
    Remarkable = require('remarkable'),
    indicaciones = require('../assets/indicaciones.json');
    
var md = new Remarkable({html:true});
    
var ExplanationsCard = React.createClass({
    getInitialState: function(){
        return({
            indicaciones:indicaciones
        });
    },
    render: function(){
        return (
                <Theme muiTheme={getMuiTheme(baseTheme)}>
                    <div>
                        <AppBar title="Taketzalis.js" showMenuIconButton={false}></AppBar>
                        <Card>
                            <CardText>
                                {
                                    this.state.indicaciones.map(function(frase,i){
                                        switch(frase.tipo){
                                            case "parrafo": 
                                                var markdownP = md.render(frase.texto);
                                                return(<p key={i}><span dangerouslySetInnerHTML={{__html:markdownP}}/></p>);
                                                break;
                                            case "ruta":
                                                var markdownRuta = md.render(frase.texto.ruta);
                                                var markdownExp = md.render(frase.texto.explicacion);
                                                return(
                                                    <div>
                                                        <p>
                                                            <Badge content={frase.texto.metodo} primary={true}>
                                                                <span dangerouslySetInnerHTML={{__html:markdownRuta}}/>
                                                            </Badge>
                                                        </p> 
                                                        <p>
                                                        <span dangerouslySetInnerHTML={{__html:markdownExp}}/>
                                                        </p>
                                                    </div>
                                                );
                                            break;
                                            case "respuesta":
                                                var markdownPar = md.render(frase.texto.parametro);
                                                var markdownExp = md.render(frase.texto.explicacion);
                                                return(
                                                    <dl key={i}>
                                                        <dt><span dangerouslySetInnerHTML={{__html:markdownPar}}/></dt>
                                                        <dd><span dangerouslySetInnerHTML={{__html:markdownExp}}/></dd>
                                                    </dl>
                                                );
                                            break;
                                            default:
                                                var markdownP = md.render(frase.texto);
                                                return(<p key={i}><span dangerouslySetInnerHTML={{__html:markdownP}}/></p>);
                                                break;
                                        }
                                        
                                    },this)
                                }
                            </CardText>
                        </Card>
                    </div>
                </Theme>
        );
    }
});

ReactDOM.render(<ExplanationsCard/>,document.getElementById('app'));