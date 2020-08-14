// class Foo extends React.Component {
//   constructor() {
//     super();
//     this.state = { loaded: false };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loaded ? null : (
//           <div
//             style={{
//               background: "red",
//               height: "400px",
//               width: "400px",
//             }}
//           />
//         )}
//         <img
//           style={this.state.loaded ? {} : { display: "none" }}
//           src={this.props.src}
//           onLoad={() => this.setState({ loaded: true })}
//         />
//       </div>
//     );
//   }
// }
