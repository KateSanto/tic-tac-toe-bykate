(this["webpackJsonptic-tac-toe-bykate"]=this["webpackJsonptic-tac-toe-bykate"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(2),s=a(5),l=a(3),c=a(6),i=a(0),u=a.n(i),o=a(8),m=a.n(o),d=(a(15),a(4)),h=a.n(d);function v(e){return u.a.createElement("button",{className:"box",onClick:e.onClick},e.value)}var E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).clearBoard=function(){a.setState({squares:Array(9).fill(null),xIsNext:!0})},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();h()(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(v,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=h()(this.state.squares),a=this.state.squares.filter((function(e){return null!==e}));return t?e="The winner is "+t:9!==a.length||t?t||(e=(this.state.xIsNext?"X":"O")+", your turn"):e="It's a tie!",u.a.createElement("div",{className:"container text-center"},u.a.createElement("div",{className:"title"},u.a.createElement("h1",null,"Tic Tac Toe")),u.a.createElement("div",{className:"status"},e),u.a.createElement("div",{className:"board"},u.a.createElement("div",{className:"row no-gutters"},u.a.createElement("div",{className:"col-4 square"},this.renderSquare(0)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(1)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(2))),u.a.createElement("div",{className:"row no-gutters"},u.a.createElement("div",{className:"col-4 square"},this.renderSquare(3)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(4)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(5))),u.a.createElement("div",{className:"row no-gutters"},u.a.createElement("div",{className:"col-4 square"},this.renderSquare(6)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(7)),u.a.createElement("div",{className:"col-4 square"},this.renderSquare(8)))),u.a.createElement("div",{className:"restart text-center"},u.a.createElement("button",{type:"button",className:"btn btn-light btn-lg",onClick:this.clearBoard},"Restart")))}}]),t}(u.a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(E,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),t}(u.a.Component);t.default=N,m.a.render(u.a.createElement(N,null),document.getElementById("root"))},15:function(e,t,a){},4:function(e,t){e.exports=function(e){if(console.log(e),void 0===e)throw new Error("Please make a move");return e[0]===e[1]&&e[0]===e[2]?e[0]:e[3]===e[4]&&e[3]===e[5]?e[3]:e[6]===e[7]&&e[6]===e[8]?e[6]:e[0]===e[3]&&e[0]===e[6]?e[0]:e[1]===e[4]&&e[1]===e[7]?e[1]:e[2]===e[5]&&e[2]===e[8]?e[2]:e[0]===e[4]&&e[0]===e[8]?e[0]:e[2]===e[4]&&e[2]===e[6]?e[2]:null}},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.c8d1fab6.chunk.js.map