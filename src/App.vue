<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" fixed variant="secondary">
      <b-navbar-brand to="/">inbrowser.tools</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/base64">Base64 Converter</b-nav-item>
          <b-nav-item to="/json">JSON Formatter/Prettifier</b-nav-item>
          <b-nav-item to="/json-yaml">JSON/YAML Converter</b-nav-item >
          <b-nav-item to="/hash-calculator">Hash Calculator</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <footer>
      <hr/>
      <p>
        inbrowser.tools by <a href="https://github.com/xinsnake">xinsnake</a> &copy; 2018<br/>
        favicon made by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">

</style>
