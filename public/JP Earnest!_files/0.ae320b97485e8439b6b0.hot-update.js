webpackHotUpdate(0,{

/***/ 291:
/*!*************************************************************************!*\
  !*** ./~/css-loader?importLoaders=1!./~/postcss-loader!./src/index.css ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 292)();
	// imports


	// module
	exports.push([module.id, "body {\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  margin-bottom: -20px;\n  padding: 0;\n  height: 130vmax;\n  font-family: sans-serif;\n  text-align: center;\n  background: url(" + __webpack_require__(/*! ../public/minimalism.png */ 293) + ") no-repeat center center fixed;\n  background-size: cover;\n  z-index: 1;\n  color: #222222;\n}\n\n.downArrow {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  font-size: 5vmax;\n}\n\n.downArrow a {\n  color: #222222;\n}\n\n\n/*#App*/\n.navFixed {\n  position: fixed;\n  width: 100%;\n  background: url(" + __webpack_require__(/*! ../public/minimalism.png */ 293) + ") no-repeat center center fixed;\n  background-size: cover;\n  z-index: 2;\n}\n\n.navBar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 1vmax;\n  font-size: 2vmax;\n}\n\n.navLink {\n  padding: 10px;\n  color: black;\n  text-decoration:none;\n}\n\n.navLink:hover {\n  font-size: larger;\n  font-weight: bold;\n}\n\n.landingContainer {\n  height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.title{\n  padding-top: 10vmax;\n}\n\nh1 {\n  font-size: 45px;\n}\n\n\n/*#main*/\n#main {\n  font-size: large;\n}\n\n#main h3 {\n  font-size: 2.5vmax;\n}\n\n\n#aboutMe {\n  padding-top: 6vmax;\n  min-height: 92vh;\n  background-color: #3399ff;\n  font-size: large;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n\n.aboutMeContentTechContainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 15vh;\n}\n\n.aboutMeContent {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 6vmax;\n}\n\n.aboutMeText {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  padding: 15px;\n  margin: 15px;\n  background-color: rgba(255,255,255,0.5);\n  border-radius: 5px;\n  font-size: 2vmax;\n  max-width: 700px;\n}\n\n.profilePic {\n  padding: 2vmax;\n  height: 25vmax;\n  border-radius: 5px;\n}\n\n/*.technologies {\n  height: 5vmin;\n  margin: 0 2vmin 2vmin 2vmin;\n}*/\n\n.techContainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  font-size: 2.5vmax;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.techDiv {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 300px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.techLearnedIcon {\n  height: 5vmin;\n  margin: 0 2vmin 2vmin 2vmin;\n}\n\n/*icon flip animation*/\n/* entire container, keeps perspective */\n.flip-container {\n\t-webkit-perspective: 1000px;\n\t        perspective: 1000px;\n}\n/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n\t-webkit-transform: rotateY(180deg);\n\t        transform: rotateY(180deg);\n}\n.flip-container, .front, .back {\n\twidth: 320px;\n}\n/* flip speed goes here */\n.flipper {\n\t-webkit-transition: 0.6s;\n\ttransition: 0.6s;\n\t-webkit-transform-style: preserve-3d;\n\t        transform-style: preserve-3d;\n\tposition: relative;\n}\n/* hide back of pane during swap */\n.front, .back {\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n/* front pane, placed above back */\n.front {\n\tz-index: 2;\n\t/* for firefox 31 */\n\t-webkit-transform: rotateY(0deg);\n\t        transform: rotateY(0deg);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n/* back, initially hidden pane */\n.back {\n\t-webkit-transform: rotateY(180deg);\n\t        transform: rotateY(180deg);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.back-col {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.tech-back{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.back-icon {\n  font-size: 1vmax;\n}\n.tech-back h6 {\n  margin-top:3px;\n  margin-bottom: 3px;\n}\n\n\n#projects {\n  margin-top: 6vmax;\n  padding-top: 6vmax;\n  padding-bottom: 6vmax;\n  border-radius: 5px;\n  background-color: #eeeeee;\n  min-height: 92vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.projectsContainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin-bottom: 3vmax;\n}\n\n.projectContainer {\n  width: 23vmax;\n  margin: 1vmax;\n  box-shadow: 0.5px 1.5px 15.5px rgba(0,0,0, 0.2);\n}\n\n.projectImg {\n  height: 15vh;\n  border-radius: 5px;\n}\n\n.projectImg:hover {\n  box-shadow: 0.5px 1.5px 15.5px rgba(0,0,0, 0.8);\n}\n\n.projectDescription {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgba(255,255,255,0.5);\n  border-radius: 5px;\n  padding: 5px;\n  height: 10vmax;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n#contact {\n  margin-top: 6vmax;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 88vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.contactIcons a {\n  color:black;\n  font-size: 3vmax;\n  padding: 1vmax;\n}\n\n.contactIcons i:hover {\n  font-size: 3.2vmax;\n}\n\n#contactInfo {\n  margin-top: 1vmax;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n#contactInfo h4 {\n  margin: 0.5vmax;\n}\n\n#footer {\n  padding-bottom: 2vmax;\n  font-size: large;\n}\n\n/*responsive design */\n/*@media (max-width: 730px) {\n  .aboutMeContent {\n    padding: 0;\n  }\n  #projects {\n    height: auto;\n  }\n  .projectsContainer {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n  }\n  #aboutMe {\n    height: auto;\n  }\n  .projectContainer {\n    width: 90%;\n  }\n  .projectImg {\n    height: 30vmax;\n  }\n}*/\n\n.techIconContainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n\n.techUsedIcon {\n  height: 2.5vmin;\n}\n\n/*.icon {\n  color:black;\n  font-size: 3vmax;\n  padding: 1vmax;\n  padding-bottom: 2vmax;\n}\n\n.icon i:hover {\n  font-size: 3.2vmax;\n}*/\n\n.upArrow {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-top: 3vh;\n  font-size: 5vmax;\n}\n\n.upArrow a {\n  color: #222222;\n}\n\n@media (max-width: 930px) {\n  #projects {\n    height: auto;\n  }\n  .techContainer {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .techDiv {\n    min-height: 20vh;\n  }\n}\n\n@media (max-width: 736px) {\n  #aboutMe {\n    height: auto;\n  }\n  .aboutMeContent {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n    -webkit-flex-direction: column-reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n  }\n  .aboutMeText {\n    font-size: 3vmax;\n  }\n  .profilePic {\n    height: 20vmax;\n  }\n  .techContainer{\n    margin-top:5vmax;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .techDiv {\n    margin-bottom: 5vmax;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  #main h3 {\n    font-size: 3.5vmax;\n  }\n  #projects {\n    margin-top: 0;\n  }\n  #contact {\n    margin-top: 0;\n  }\n}\n\n@media (max-height: 800px){\n  .title {\n    margin: 0 20vmin;\n    padding: 0.5vmin;\n    background-color: rgba(238,238,238, 0.5);\n  }\n}\n\n@media (max-height: 800px) and (orientation: landscape){\n  .landingContainer {\n    padding-top: 5vmin;\n    height: 95vmin;\n  }\n}\n\nbody.is-os, #footer.is-os {\n\n    background: url(/static/media/minimalism.ea7a4b34.png) no-repeat 50%;\n}\n", ""]);

	// exports


/***/ }

})
//# sourceMappingURL=0.ae320b97485e8439b6b0.hot-update.js.map