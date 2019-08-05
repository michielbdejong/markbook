// init
const defaultUri = 'https://melvin.solid.live/public/bookmarks.ttl'
var subject = getQueryStringParam('uri') || defaultUri

function Main (props) {
  return (
    <section className='section'>
      <AddressBar subject={subject}>
        <Bookmark />
      </AddressBar>
    </section>
  )
}

function App () {
  return (
    <div>

      <NavbarSolidLogin
        className='is-link'
        title='Mark Book!'
        sourceCode='https://github.com/mark-book/markbook/blob/gh-pages/v2/index.html' />

      <Main />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)