const heading = React.createElement(
  "h1",
  // Inside this object we give attributes of the tags (Notice it in developer elements console)
  {
    id: "heading",
    xyz: 'abc'
  },
  "Helloworld using React!"
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
