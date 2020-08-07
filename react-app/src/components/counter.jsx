import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles= {
        fontSize: 10,
        fontWeight: "bold"
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return  <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>;
    }


    render() { 

        return (
            <div>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
          
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles} className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {/* display a list */}
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    // set a class dynamically
    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 

export default Counter;