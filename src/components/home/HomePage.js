import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class HomePage extends React.Component {

  constructor() {
    super();
    const items = [
      {id: '1', name: 'Item 1'},
      {id: '2', name: 'Second item'},
    ];
    this.state = { items };
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const items = [...this.state.items, { id: this.state.items.length + 1 + '', name: new Date() + '' }];
    this.setState({items});
  }
  removeItem(item) {
    const { id } = item;
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({items});
  }


  render() {
    return (
        <div className="homePage container">
          <div className="jumbotron">
            <h1>React forms</h1>
            <p>Intention is purely learn React and write HTML form manually with basic validation and one example of all possible elements.</p>

            <h2>Things you'll find here in this repo:</h2>
            <ul>
              <li>React HTML forms with elements: Input, TextArea, CheckBox and RadioGroup.</li>
              <li>React Routing</li>
              <li>Redux (no async calls yet)</li>
              <li>Basic Form validation</li>
              <li>Create/Modify/Remove course.</li>
              <li>Basic Animations</li>
              <li>(TODO) Animate Delete course</li>

            </ul>
          </div>

          <hr/>
          <div><input type="button" value="add" onClick={this.addItem} /></div>

          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={1500}
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>

            {this.state.items.map((item) => {
              return (
                <div key={item.id} className="todo-item" onClick={this.removeItem.bind(null, item)}>
                  {item.name}
                </div>
              );
            })}
          </ReactCSSTransitionGroup>
        </div>

    )
  }

}

export default HomePage;
