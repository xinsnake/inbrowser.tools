<template>
  <div id="app">
    <b-container class="bv-example-row">

      <b-navbar toggleable="md" type="dark" fixed variant="info">
        <b-navbar-brand to="/">inbrowser.tools</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/base64">Base64</b-nav-item>
            <b-nav-item to="/json">JSON</b-nav-item>
            <b-nav-item to="/json-yaml">JSON/YAML</b-nav-item >
            <b-nav-item to="/hash-calculator">Hash</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="spacer">
        <router-view/>
      </div>

      <footer>
        <hr/>
        <p>
          inbrowser.tools by <a href="https://github.com/xinsnake">xinsnake</a> &copy; 2019
        </p>
      </footer>

    </b-container>
  </div>
</template>

<style lang="scss">
.spacer {
  margin: 2em 0;
}
textarea {
  font-family: 'Courier New', Courier, monospace !important;
}
footer {
  text-align: center;
  color: #999999;
}
</style>
