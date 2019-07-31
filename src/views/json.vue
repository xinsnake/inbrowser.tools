<template>
  <div class="json">
    <h2>json formatter</h2>
    <div class="center">
      <label>json goes here</label>
      <div id="json" data-language="javascript" style="height: 300px"></div>
      <div class="error" id="error-msg"></div>
    </div>
    <div class="center">
      <button id="prettify">Prettify</button>
      <button id="minify">Minify</button>
    </div>
  </div>
</template>
