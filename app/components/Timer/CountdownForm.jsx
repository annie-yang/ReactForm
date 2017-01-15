var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.referenceSeconds.value;

    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.referenceSeconds.value = '';

      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render:function(){
    return(
      <div>
        <form ref="referenceForm" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="referenceSeconds" placeholder="Enter time in seconds"></input>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
