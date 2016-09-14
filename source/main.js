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
    Paper = require('material-ui/Paper').default,
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
                                                            <strong>{frase.texto.metodo}:</strong> <span dangerouslySetInnerHTML={{__html:markdownRuta}}/>
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
                                                    <Paper zDepth={2}>
                                                        <dl key={i} className="dl-horizontal">
                                                            <dt><span dangerouslySetInnerHTML={{__html:markdownPar}}/></dt>
                                                            <dd><span dangerouslySetInnerHTML={{__html:markdownExp}}/></dd>
                                                        </dl>
                                                    </Paper>
                                                );
                                                break;
                                            case "parametro":
                                                var markdownPar = md.render(frase.texto.parametro);
                                                var markdownExp = md.render(frase.texto.explicacion);
                                                return(
                                                    <Paper zDepth={2}>
                                                        <dl key={i} className="dl-horizontal">
                                                            <dt><span dangerouslySetInnerHTML={{__html:markdownPar}}/></dt>
                                                            <dd><span dangerouslySetInnerHTML={{__html:markdownExp}}/></dd>
                                                        </dl>
                                                    </Paper>
                                                );
                                                break;
                                            default:
                                                var markdownP = md.render(frase.texto);
                                                return(<p key={i}><span dangerouslySetInnerHTML={{__html:markdownP}}/></p>);
                                                break;
                                        }
                                        
                                    },this)
                                }
                                <div className="text-center"><a href="https://github.com/justinian336/taketzalis.js"><i className="fa fa-github fa-5x" aria-hidden="true"></i></a></div>
                            </CardText>
                        </Card>
                    </div>
                </Theme>
        );
    }
});

ReactDOM.render(<ExplanationsCard/>,document.getElementById('app'));