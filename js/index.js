var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.state = {
      quote: "Finn: Mathematical!"
    };
    $.ajax({
      type: 'GET',
      context: _this,
      url: 'https://adventure-time-quote-api.glitch.me/api/random',
      success: function success(data) {
        this.setState({ quote: data });
      }
    });
    return _this;
  }

  _createClass(Page, [{
    key: 'handleClick',
    value: function handleClick() {
      $.ajax({
        type: 'GET',
        context: this,
        url: 'https://adventure-time-quote-api.glitch.me/api/random',
        success: function success(data) {
          this.setState({ quote: data });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(TitleLogo, null),
        React.createElement(Intro, null),
        React.createElement(Button, { onClick: this.handleClick }),
        React.createElement(Quote, { quote: this.state.quote })
      );
    }
  }]);

  return Page;
}(React.Component);

var TitleLogo = function TitleLogo() {
  return React.createElement(
    'div',
    null,
    React.createElement('img', {
      className: 'title_logo',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/376318/Adventure_Time_logo.png', alt: 'Adventure Time Logo'
    }),
    React.createElement(
      'div',
      { className: 'title unselectable' },
      React.createElement(
        'h1',
        null,
        'Quote Generator'
      )
    )
  );
};

var Intro = function Intro() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'p1 unselectable' },
      React.createElement(
        'p',
        null,
        'This a quote generator for one of my favorite shows, Adventure Time. For a children\'s show you\'ll find that it can be pretty deep.'
      ),
      React.createElement(
        'p',
        null,
        'Press that button to get a random quote, ya dig?'
      )
    )
  );
};

var Button = function Button(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'quote-button', onClick: props.onClick },
      React.createElement(
        'button',
        null,
        'Generate a Quote'
      )
    )
  );
};

var Quote = function Quote(props) {
  return React.createElement(
    'div',
    { className: 'contain' },
    React.createElement(
      'div',
      { className: 'quote' },
      React.createElement(
        'div',
        { id: 'ATQuote' },
        props.quote
      )
    )
  );
};

ReactDOM.render(React.createElement(Page, null), document.getElementById("app"));