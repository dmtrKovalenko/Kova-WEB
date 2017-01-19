import React from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dataSource: []
        }
    }
    
    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    search = (value) => {
        this.props.router.push({ pathname: '/songs', query: { q: value }});
    }

    render() {
        return (
            <Paper zDepth={2}
                   className="search-bar">
                <IconButton className="search-icon">
                    <SearchIcon />
                </IconButton>

                <div className="search-input">
                    <AutoComplete hintText="Search"
                                  dataSource={this.state.dataSource}
                                  onUpdateInput={this.handleUpdateInput}
                                  fullWidth={true}
                                  onNewRequest={this.search.bind(this)} />
                </div>
            </Paper>)
    } 
}

export default SearchBar;