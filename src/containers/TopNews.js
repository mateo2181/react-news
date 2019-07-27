import React from "react";
import { connect } from "react-redux";
import NewsItem from "../components/NewsItem";
class TopNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.updateHeight = this.updateHeight.bind(this);
  }

  updateHeight() {
    let height = document.getElementById("navbar").clientHeight;
    this.setState({ height: height });
    console.log(height);
  }

  componentDidMount() {
    let height = document.getElementById("navbar").clientHeight;
    this.setState({ height: height });

    window.addEventListener("resize", this.updateHeight);
  }

  render() {
    let topNews = "";
    if (this.props.channels) {
      topNews = this.props.channels.map((article, index) => (
        <div key={`${index}`} className="w-full sm:px-4 mb-4 sm:w-1/2 md:w-1/3">
          <NewsItem article={this.props.channels[index]} />
        </div>
      ));
    }
    if (this.props.channels && this.props.channels.lengnth === 0) {
      topNews = "No items";
    }
    if (this.props.loading) {
      topNews = "Loading...";
    }
    return (
      <div
        style={{ marginTop: this.state.height }}
        className="mt-4 flex flex-wrap"
      >
        {topNews}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.json,
  loading: state.loading
});
TopNews = connect(
  mapStateToProps,
  null
)(TopNews);
export default TopNews;
