<template>
  <div class="baes64">
    <h2>base64 converter</h2>
    <div class="center">
      <label>Plain</label>
      <div id="plain" data-language="plain"></div>
    </div>
    <div class="center">
      <button id="encode">Encode</button>
      <button id="decode">Decode</button>
      <button id="clear">Clear</button>
    </div>
    <div class="center">
      <label>Encoded</label>
      <div id="encoded" data-language="plain"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'base64',
  components: {},
  data() {
    return {
      plain: '',
      encoded: '',
    };
  },
  methods: {
    encode() {

    },
    decode() {

    },
    clear() {

    },
  },
};
</script>
