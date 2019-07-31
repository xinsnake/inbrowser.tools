<template>
  <div class="json-yaml">
    <h2>json yaml converter</h2>
    <div class="center">
      <label>json</label>
      <div id="json" data-language="javascript" style="height: 300px"></div>
    </div>
    <div class="center">
      <button id="to-yaml">to yaml</button>
      <button id="to-json">to json</button>
      <button id="clear">Clear</button>
      <div class="error" id="error-msg"></div>
    </div>
    <div class="center">
      <label>yaml</label>
      <div id="yaml" data-language="yaml" style="height: 300px"></div>
    </div>
  </div>
</template>
