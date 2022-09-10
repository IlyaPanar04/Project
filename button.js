/*function tick() {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        root.render(element);
    };
    setInterval(tick , 1000)*/




/* function Welcome(props) {
        return <h1>Привет, {props.name}</h1>;
    }
    const user = {name:'Ilya'}
    const element = Welcome(user)
    root.render(element)*/


/*function Welcome(props) {
        return <h1>Привет, {props.name}</h1>;
    }

    function App(){
        return (
            <div>
                <Welcome name = 'Ilya'/>
                <Welcome name = 'Darya'/>
                <Welcome name = 'Nikita'/>
            </div>
        )
    }
    root.render(<App/>)*/




/* function Clock(props) {
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {props.date.toLocaleTimeString()}.</h2>
            </div>
        )

    }

    function tick(){
        root.render(<Clock date = {new Date()}/>)
    }

    setInterval(tick , 1000)*/




/*class Clock extends React.Component{
        constructor(props) {
            super(props);
            this.state = {date: new Date()}
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick(){
            this.setState({
                date : new Date()
            })
        }

        render(){
            return(
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            )
        }
    }

    root.render(<Clock />)*/



/*class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // Эта привязка обязательна для работы `this` в колбэке.
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                </button>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Toggle />);*/




/*<div id="panel">
                            <p>login:<input name="login" type="text"  value={log}    /></p>
                            <p>Password: <input name="password" type="text"   value={map.get(log)}    /></p>
                        </div>
*/