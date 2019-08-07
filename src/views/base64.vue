<template>
  <div class="baes64">
    <h2>Base64</h2>
    <b-row>
      <b-col>
        <label>Plain</label>
        <b-form-textarea
          v-model="plain"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
      <b-col>
        <label>Encoded</label>
        <b-form-textarea
          v-model="encoded"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <br/>
        <b-alert v-model="isError" variant="danger" dismissible>
          {{ error }}
        </b-alert>
        <b-button @click="encode" variant="primary">Encode</b-button>&nbsp;
        <b-button @click="decode" variant="primary">Decode</b-button>&nbsp;
        <b-button @click="clear" variant="warning">Clear</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'base64',
  components: {},
  data() {
    return {
      plain: '',
      encoded: '',
      isError: false,
      error: null,
    };
  },
  methods: {
    clearError() {
      this.isError = false;
      this.error = null;
    },
    setError(message) {
      this.isError = true;
      this.error = message;
    },
    encode() {
      this.encoded = btoa(this.plain);
      this.clearError();
    },
    decode() {
      try {
        this.plain = atob(this.encoded);
        this.clearError();
      } catch (err) {
        setError('Invalid Base64 string!')
      }
    },
    clear() {
      this.plain = '';
      this.encoded = '';
      this.clearError();
    },
  },
};
</script>
