class RandomComponent extends React.Component {
    paragraphStyles = {
      color: "Red",
      fontSize: "32px"
    };
   
    headingStyles = {
      color: "blue",
      fontSize: "48px"
    };
   
    render() {
      return (
        <div>
          <h3 style={this.headingStyles}>This is a heading</h3>
          <p style={this.paragraphStyles}>This is a paragraph</p>
        </div>
      );
    }
   }