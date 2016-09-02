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
                        <AppBar title="Taketzalis.js"></AppBar>
                        <Card>
                            <CardText>
                                {
                                    this.state.indicaciones.map(function(frase,i){
                                        var markdown = md.render(frase.texto);
                                        return(<p key={i}><span dangerouslySetInnerHTML={{__html:markdown}}/></p>);
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