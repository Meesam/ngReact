var app=angular.module('app',['react']);
//import AddressComponent from './addres.jsx';
var HelloComponent = React.createClass({
  renderPerson:function(data){
    var arr = [];
    for(var x in data){
      arr.push(data[x]);
    }
    return arr.map((item)=>{
      return (
        <div key={item.fname}>
          <div>{item.fname}</div>
          <div>{item.lname}</div>
          <div>
           {/* <AddressComponent contactInfo={item.contactInfo} ></AddressComponent>*/}
          </div>
        </div>
      )
    })
  },

  render: function() {
    return (
      <div>
        {this.renderPerson(this.props)}
      </div>
    );
  }
})
app.value('HelloComponent', HelloComponent);