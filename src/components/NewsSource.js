import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import { API_KEY, BASE_URL} from  '../Constant';
import Loading from './Loading';
import {connect} from 'react-redux';

import {setNewsSource, setNewsListData} from '../actions/actions';

class NewsSource extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sources: [],
            newsList: []
        }
    }

    componentDidMount() {
        let url = BASE_URL+`/sources?apiKey=${API_KEY}`
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    sources: myJson.sources
                })
            });
    }

    onNewsSourceClick = (id)=>{
        this.props.onNewsSourceClick(id);
        //fetching selected cateogry data
        let url = `${BASE_URL}top-headlines?sources=${id}&apiKey=${API_KEY}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.props.setNewsListData(myJson.articles);
            });

    }

    render() {
        console.log(this.state.newsList);
        return (
            <div>
                {
                    !this.state.sources.length ? <Loading/>:
                    <List divided verticalAlign='middle'>
                    <div className="source-name heading-teritiary">Sources</div>{
                        this.state.sources.map((source, index) => {
                            return (
                                <List.Item key = {index}>
                                    <List.Content>
                                        <List.Header>
                                            <div onClick={()=>this.onNewsSourceClick(source.id)} className="source-name">
                                                {source.name}
                                            </div>
                                        </List.Header>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    } </List>
                }

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        selectedSource: state.newsReducer.source_info.selectedSource
    }
}
function mapDispatchToProps(dispatch){
    return {
        onNewsSourceClick: (newsSource) => dispatch(setNewsSource(newsSource)),
        setNewsListData: (newsList) => dispatch(setNewsListData(newsList)),
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSource);
