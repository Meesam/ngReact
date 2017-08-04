var app=angular.module('app',['react']);
//import AddressComponent from './addres.jsx';
var HelloComponent = React.createClass({displayName: "HelloComponent",
  renderPerson:function(data){
    var arr = [];
    for(var x in data){
      arr.push(data[x]);
    }
    return arr.map((item)=>{
      return (
        React.createElement("div", {key: item.fname}, 
          React.createElement("div", null, item.fname), 
          React.createElement("div", null, item.lname), 
          React.createElement("div", null
           /* <AddressComponent contactInfo={item.contactInfo} ></AddressComponent>*/
          )
        )
      )
    })
  },

  render: function() {
    return (
      React.createElement("div", null, 
        this.renderPerson(this.props)
      )
    );
  }
})
app.value('HelloComponent', HelloComponent);