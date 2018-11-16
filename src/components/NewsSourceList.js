import React, { Component } from 'react';
import {connect} from 'react-redux';
import { List, Image } from 'semantic-ui-react';

import {BASE_URL, API_KEY} from  '../Constant';
import Loading from './Loading';
import NewsDetails from './NewsDetails';

class NewsSourceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {
                    !this.props.newsList.length ? <Loading/>:
                    <List divided verticalAlign='middle'>
                    <div className="source-name heading-teritiary">{this.props.selectedSource}</div>{
                        this.props.newsList.map((source, index) => {
                            return (
                                <List.Item key={index}>
                                    <Image size='small' src={source.urlToImage} />
                                    <List.Content>
                                        <List.Header>
                                            <div className="source-name">
                                                {source.title}
                                            </div>
                                        </List.Header>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    } </List>
                }
                <NewsDetails/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        newsList: state.newsReducer.source_info.newsList,
        selectedSource: state.newsReducer.source_info.selectedSource
    }

}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSourceList);
