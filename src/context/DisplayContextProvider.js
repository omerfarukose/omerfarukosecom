import React, {Component} from 'react'
import DisplayContext from "./DisplayContext";

class DisplayContextProvider extends Component {
    state = {
        displayDesktop: false,
        displayTerminal: false,
        displayDocuments: false,
        displayBrowser: false
    };

    render() {
        return (
            <DisplayContext.Provider
                value={{
                    displayDesktop: this.state.displayDesktop,
                    displayTerminal: this.state.displayTerminal,
                    displayDocuments: this.state.displayDocuments,
                    displayBrowser: this.state.displayBrowser,
                    setDisplayDesktop : (value) => {
                        this.setState({
                            displayDesktop: value
                        });
                    },
                    setDisplayTerminal : (value) => {
                        this.setState({
                            displayTerminal: value
                        });
                    },
                    setDisplayDocuments : (value) => {
                        this.setState({
                            displayDocuments: value
                        });
                    },
                    setDisplayBrowser : (value) => {
                        this.setState({
                            displayBrowser: value
                        });
                    }
                }}
            >
                {this.props.children}
            </DisplayContext.Provider>
        );
    }
}