// import React,{Component,PropTypes} from 'react';
//
//  class AddressComponent extends Component{
//   constructor(props){
//     super(props)
//   }
//   renderAddress(data){
//     var arr = [];
//     for(var x in data){
//       arr.push(data[x]);
//     }
//     return arr.map((item)=>{
//       return (
//         <div key={item.email}>
//           <div>{item.email}</div>
//         </div>
//       )
//     })
//   }
//
//   render(){
//     console.log('this.props ' , this.props);
//     return(
//       <div>
//         {this.renderAddress(this.props.contactInfo)}
//       </div>
//     )
//   }
//
//
// }
//
// export default AddressComponent ;
//
// /*export default AddressComponent = React.createClass({
//   renderAddress:function(data){
//     var arr = [];
//     for(var x in data){
//       arr.push(data[x]);
//     }
//     return arr.map((item)=>{
//       return (
//         <div key={item.email}>
//           <div>{item.email}</div>
//         </div>
//       )
//     })
//   },
//
//   render: function() {
//     console.log('address ' , this.props.contactInfo);
//     return (
//       <div>
//         {this.renderAddress(this.props)}
//       </div>
//     );
//   }
// })*/
//
//
